<template>
    <div>
        <textarea v-model="text" @keydown.enter="tijiao" placeholder="写下今天要做的事情吧！！！(回车提交)"></textarea>
        <!-- <button @click="add">提交</button> -->
    </div>
</template>
<script setup lang="ts" name="shouSuo">
import { useRouter } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { useThingStore } from '@/stores/things'
import { onUnmounted } from 'vue'
   const ThingStroe = useThingStore()
   const {text, thingsList }=storeToRefs(ThingStroe)
   const {add}=ThingStroe
   const unsubscribe= ThingStroe.$subscribe((mutate,state)=>{
    localStorage.setItem('thingList',JSON.stringify(state.thingsList))
   })
   const router=useRouter()
   let timer:any = null
    const tijiao = (e:any)=>{
        add()
        timer=setTimeout(()=>{
            router.go(-1)
            unsubscribe()},5000 )
        
    }
    onUnmounted(()=>clearTimeout(timer))
</script>
<style scoped>
    textarea{
        resize: none;
        border-radius: 10px;
        width: 100%;
        display: inline-block;
        flex: 4;
        height: 160px;
    }
    div{
        display: flex;
        justify-content: space-around;
    }
    button{
        display: inline-block;
        border: 1px solid rgba(0, 0, 0, 0.301);
        color: rgba(0, 0, 0, 0.425);
        width: 60px;
        height: auto;
        flex: 1;
        background-color: rgb(194, 194, 194);
    }
    button:hover{
        background-color: rgb(108, 109, 110);
    }
</style>