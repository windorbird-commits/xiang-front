import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useXiangFangStore = defineStore('xiangFang', () => {
    // 香方数据
    const xiangFang = reactive({
        name: '',
        useFor: [],
        compose: []
    });

    // 粘粉比例
    const nianFenPercent = ref(null);

    // 待添加的香份数据
    const waitAddXiangFenName = ref('');
    const waitAddXiangFenWeight = ref(null);

    // 清空所有数据
    function clearAll() {
        // 清空香方数据
        xiangFang.name = '';
        xiangFang.useFor = [];
        xiangFang.compose = [];

        // 清空粘粉比例
        nianFenPercent.value = null;

        // 清空待添加的香份数据
        waitAddXiangFenName.value = '';
        waitAddXiangFenWeight.value = null;
    }

    return {
        xiangFang,
        nianFenPercent,
        waitAddXiangFenName,
        waitAddXiangFenWeight,
        clearAll
    };
});