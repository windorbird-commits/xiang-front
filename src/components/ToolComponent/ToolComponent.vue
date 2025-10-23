<template>
    <view class="container">
        <slot name="image"></slot>

        <view class="slot-container">
            <slot name="text"></slot>
        </view>

    </view>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
    .container {
        width: 335rpx;
        height: 250rpx;
        // border: 1px solid red;
        border-radius: 20rpx;
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;

        .slot-container {
            width: 100%;
            height: 80rpx;
            // border: 2rpx, solid pink;
            border-width: 1rpx 0 0 0;
            border-style: solid;
            border-color: $qianHuiSeBianKuang;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $qianHeSeBeiJing;
        }
    }
</style>