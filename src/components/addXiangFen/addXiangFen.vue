<template>
    <view class="addXiangFen">
        <view class="input">
            <view class="left">
                <uv-input border="none" placeholderStyle="font-size:30rpx" fontSize="40rpx" placeholder="请输入材料名"
                    customStyle="height:100rpx" maxlength="10"></uv-input>
            </view>
            <view class="right">
                <uv-input border="none" placeholderStyle="font-size:30rpx" fontSize="40rpx" placeholder="请输入重量"
                    customStyle="height:100rpx" maxlength="10"></uv-input>
            </view>
        </view>
        <view class="addButton">
            点&emsp;击&emsp;添&emsp;加
        </view>
    </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .addXiangFen {
        box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.2);
        margin: 70rpx 0;
        border-radius: 20rpx;
    }

    .input {
        // width: 700rpx;
        /* border: 1rpx solid black; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20rpx 0 0 0;

        .left {
            width: 300rpx;
            // border: 1rpx solid red;
        }

        .right {
            width: 300rpx;
            // border: 1rpx solid blue;
        }
    }

    .addButton {
        // width: 700rpx;
        height: 80rpx;
        /* border: 1rpx solid #343; */
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5e6d3;
        border-radius: 0 0 20rpx 20rpx;
    }
</style>