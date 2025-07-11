<template>
    
    <div class="thing">
        <ol>
            <li v-for="(thing,index) in thingsList" :key="thing.id">{{ index+1 }}: {{ thing.thing }}     <button @click="del(index)">删除</button></li>
        </ol>
        <RouterView></RouterView>
        <RouterLink to="/shousuo" class="a"><i class="iconfont icon-add"> </i></RouterLink>
    </div>
    
</template>
<script setup lang="ts" name="Things">
import { RouterLink,RouterView } from 'vue-router';
 import { storeToRefs } from 'pinia'
    import { useThingStore } from '@/stores/things'
   const ThingStroe = useThingStore()
   const {text, thingsList }=storeToRefs(ThingStroe)
   
    const {add, del}=ThingStroe
   
  
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
button{
    height: 40px;
    width: 70px;
    border: 0px solid beige;
    background-color: rgb(255, 166, 0);
    margin-left: 90px;
}
.thing{
    height: auto;
}

.iconfont{
    height: 100px;
    width: 100px;
    font-size: 50px;
    color: #0000007c;
}
.a{
    display: block;
    text-align: right;
    width: 100%;
}
li{
    width: 100%;
    height: 200px;
    border-radius: 10px;
    font-size: 50px;
    line-height: 200px;
    text-align: center;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.226);
    background-color: rgb(248, 167, 16);
}
li:hover{
    background-color: rgb(185, 118, 17);
}
</style>