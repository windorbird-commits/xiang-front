<template>
    <view class="container">
        <view class="top">
            <text class="title">见您公主压箱</text>
        </view>
        <view class="mid">
            <text>你好我好大家好</text>
        </view>
        <view class="bottom">
            <view class="bot-left">
                <text>
                    aaa
                </text>
            </view>
        </view>

    </view>
</template>


<script setup lang="ts">
</script>

<style scoped>
    .container {
        width: 700rpx;
        height: 300rpx;
        /* border: 1px solid red; */
        border-radius: 20rpx;
        /* 添加Flex布局确保垂直排列 */
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        /*增加阴影效果*/
        box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.5);
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        color: red;
        font-size: 32rpx;
        font-weight: bold;
    }

    .top {
        width: 100%;
        height: 30%;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 2rpx;
        border-style: solid;
        border-color: #aaa;
        background-color: #d1b68e;
        /* 使用Flex布局 */
        display: flex;
        box-sizing: border-box;
    }

    .mid {
        width: 100%;
        height: 50%;
        /* border: 2px solid blue; */
        /* 确保块级显示 */
        display: block;
        box-sizing: border-box;
        background-color: #f5e6d3;
    }

    .bottom {
        width: 100%;
        height: 20%;
        border-top: 1rpx;
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
        border-style: solid;
        border-color: #aaa;
        /* 确保块级显示 */
        display: block;
        box-sizing: border-box;
        background-color: #f5e6d3;
    }
</style>