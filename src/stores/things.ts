import { defineStore } from "pinia";
import { type Persons } from '@/types/typeThing'
import { nanoid } from 'nanoid'
import { ref, reactive } from 'vue'

// 拼写修正 useThingStore
export const useThingStore = defineStore('thing', () => {
    // localStorage.clear() // 清除 localStorage 中的所有数据，方便测试
    const text = ref('')
    // 初始化 thingsList
    const localData = localStorage.getItem('thingList')
    const defaultThing = { id: nanoid(), thing: '写下今天要做的事情吧！！！' }
    let thingsList: Persons
    try {
        thingsList = localData && localData !== 'undefined' ? JSON.parse(localData) : [defaultThing]
    } catch {
        thingsList = [defaultThing]
    }
    // 如果 thingsList 为空数组，也加上 defaultThing
    if (!thingsList.length) {
        thingsList = [defaultThing]
    }
    const thingsListReactive = reactive<Persons>(thingsList)

    // 添加事项
    function add() {
        if (thingsListReactive.length && thingsListReactive[0].thing === defaultThing.thing) thingsListReactive.pop()
        if (text.value.trim() === '') {
            alert('请不要输入空白！！！')
            return
        }
        const obj = {
            id: nanoid(),
            thing: text.value.trim()
        }
        thingsListReactive.push(obj)
        text.value = ''
        // 同步到 localStorage
        localStorage.setItem('thingList', JSON.stringify(thingsListReactive))
    }

    // 删除事项
    function del(index: number) {
        if (index < 0 || index >= thingsListReactive.length) return
        thingsListReactive.splice(index, 1)
        // 如果删除后为空，自动添加 defaultThing
        if (thingsListReactive.length === 0) {
            thingsListReactive.push({ id: nanoid(), thing: '写下今天要做的事情吧！！！' })
        }
        // 同步到 localStorage
        localStorage.setItem('thingList', JSON.stringify(thingsListReactive))
    }

    return { text, add, thingsList: thingsListReactive, del }
})
