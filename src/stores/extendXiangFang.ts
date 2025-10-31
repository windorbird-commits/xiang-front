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
    let xiangFangCopy = ref(null);

    let firstClick = false; // 第一次点击


    let extendNum = ref(null) // 扩大倍数
    // 待添加的香份数据
    const waitAddXiangFenName = ref('');
    const waitAddXiangFenWeight = ref(null);

    // 清空所有数据 暂时留着吧
    // function clearAll() {
    //     // 清空香方数据
    //     xiangFang.name = '';
    //     xiangFang.useFor = [];
    //     xiangFang.compose = [];

    //     // 清空待添加的香份数据
    //     waitAddXiangFenName.value = '';
    //     waitAddXiangFenWeight.value = null;
    // }

    function extend() {
        if (!this.extendNum || this.extendNum.trim().length === 0 || isNaN(Number(this.extendNum))) {
            return
        }

        const num = Number(this.extendNum)
        if (!this.firstClick) {
            this.firstClick = true
            this.xiangFangCopy = deepCopyRef(xiangFang)
        }
        xiangFang.compose.map((item) => { item.weight *= num });
    }

    function reset() {
        this.extendNum = ref(null)
        this.firstClick = false
        Object.assign(this.xiangFang, this.xiangFangCopy)

    }

    return {
        xiangFang,
        extendNum,
        waitAddXiangFenName,
        waitAddXiangFenWeight,
        extend,
        reset,
    };
});