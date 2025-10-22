<template>
    <view class="container">
        <view v-for="i in 10">
            <XiangFangItem class="xiangFangItem"></XiangFangItem>
        </view>

    </view>
</template>

<script setup>

</script>

<style scoped>
    .container {
        box-sizing: border-box;
    }

    .xiangFangItem {
        margin: 50rpx 20rpx;
        display: -webkit-flex;
        /* H5兼容性前缀 */
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        /* 统一盒模型 */

    }
</style>