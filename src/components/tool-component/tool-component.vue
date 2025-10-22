<template>
    <view class="container">
        <view class="image">
            <image src="/src/static/avatar-default.png" mode=""></image>
        </view>
        <view class="slot">
            <slot></slot>
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
        box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.1);


        .image {
            width: 100%;
            padding: 0 10rpx;
            height: 190rpx;
            // border: 2px solid blue;
            overflow: hidden;
        }

        .slot {
            width: 100%;
            height: 60rpx;
            // border: 2rpx, solid pink;
        }
    }
</style>