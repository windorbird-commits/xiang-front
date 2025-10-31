<template>
    <view class="container">
        <xiang-fang-detail v-bind:xiangFangStore="XiangFenPercentShowStore" class="XiangFangDetail"></xiang-fang-detail>
        <save-xiang-fang v-bind:xiangFangStore="XiangFenPercentShowStore" class="SaveXiangFang"></save-xiang-fang>
    </view>
</template>

<script lang="ts" setup>
    import { useXiangFenPercentShowStore } from "@/stores/xiang-fen-percent-show"
    const XiangFenPercentShowStore = useXiangFenPercentShowStore()
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>