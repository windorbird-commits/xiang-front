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
    .container {
        box-sizing: border-box;
    }

    .xiangFangItem {
        width: 690rpx;
        margin: 50rpx auto;
        display: -webkit-flex;
        /* H5兼容性前缀 */
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        /* 统一盒模型 */

    }
</style>