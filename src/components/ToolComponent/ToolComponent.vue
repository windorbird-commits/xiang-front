<template>
    <view class="container">
        <slot name="image"></slot>
        <slot name="text"></slot>
    </view>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
    .container {
        width: 320rpx;
        height: 250rpx;
        // border: 1px solid blue;
        border-radius: 20rpx;
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
    }
</style>