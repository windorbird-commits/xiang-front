<template>
    <view class="container">
        <view v-for="i in 10">
            <XiangFangItem class="xiangFangItem"></XiangFangItem>
        </view>

    </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .xiangFangItem {
        width: 690rpx;
        margin: 50rpx auto;
        display: -webkit-flex;
        /* H5兼容性前缀 */
        justify-content: center;
        align-items: center;
    }
</style>