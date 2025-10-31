import { defineStore } from 'pinia';
import { ref, reactive, isRef, toRaw } from 'vue';

export const useExtendXiangFangStore = defineStore('extendXiangFang', () => {
    // 香方数据
    let xiangFang = reactive({
        name: '',
        useFor: [],
        compose: []
    });

    // 深拷贝函数
    function deepCopyRef(r) {
        const value = toRaw(r);
        return JSON.parse(JSON.stringify(value));
    }
    let xiangFangCopy = null;

    let firstClick = false; // 第一次点击


    let extendNum = ref(null) // 扩大倍数
    // 待添加的香份数据
    const waitAddXiangFenName = ref('');
    const waitAddXiangFenWeight = ref(null);

    // 清空所有数据 暂时留着吧
    function clearAll() {
        // 清空香方数据
        xiangFang.name = '';
        xiangFang.useFor = [];
        xiangFang.compose = [];

        // 清空待添加的香份数据
        waitAddXiangFenName.value = '';
        waitAddXiangFenWeight.value = null;
        extendNum.value = null;
        xiangFangCopy = null;
    }

    function extend() {
        if (!extendNum || extendNum.value.trim().length === 0 || isNaN(Number(extendNum.value))) {
            return
        }

        const num = Number(extendNum.value)
        if (!firstClick) {
            firstClick = true
            xiangFangCopy = deepCopyRef(xiangFang)
        }
        xiangFang.compose.map((item) => { item.weight *= num });
    }

    function reset() {
        extendNum.value = null
        firstClick = false
        Object.assign(xiangFang, xiangFangCopy)
    }

    return {
        xiangFang,
        extendNum,
        waitAddXiangFenName,
        waitAddXiangFenWeight,
        extend,
        reset,
        clearAll,
    };
});