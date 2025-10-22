<template>
    <view class="container">
        <view v-for="i in 10" class="xiangFangItem">
            <XiangFangItem></XiangFangItem>
        </view>

    </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
    }

    .xiangFangItem {
        margin: 30rpx auto;
        justify-content: center;
        align-items: center;
    }
</style>