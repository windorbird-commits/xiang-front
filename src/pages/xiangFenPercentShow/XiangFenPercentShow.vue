<template>
    <view class="container">
        <XiangFangDetail class="XiangFangDetail"></XiangFangDetail>
        <AddXiangFen class="AddXiangFen"></AddXiangFen>
        <SaveXiangFang class="SaveXiangFang"></SaveXiangFang>
    </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .XiangFangDetail {
        margin: 30rpx 0 0 0;
    }
</style>