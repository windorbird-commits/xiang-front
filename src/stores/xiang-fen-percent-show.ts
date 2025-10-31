import { defineStore } from 'pinia';
import { ref, reactive, isRef, toRaw } from 'vue';

export const useXiangFenPercentShowStore = defineStore('xiangFenPercentShow', () => {
    // 香方数据


    let xiangFang = reactive({
        name: '',
        useFor: [],
        compose: []
    });

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
    }

    return {
        xiangFang,
        waitAddXiangFenName,
        waitAddXiangFenWeight,
        clearAll
    };
});