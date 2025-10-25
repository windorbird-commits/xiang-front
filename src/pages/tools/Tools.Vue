<template>
    <view class="container">
        <navigator class="navigator" url="/pages/calculateNianFen/CalculateNianFen" hover-class="navigator-hover">

            <view class="image">
                <image src="/src/common/tool-pics/dingxiang.png" mode="aspectFill"></image>
            </view>

            <text class="text">粘粉加多少</text>

        </navigator>

        <navigator class="navigator" url="/pages/xiangFenPercentShow/XiangFenPercentShow" hover-class="navigator-hover">

            <view class="image">
                <image src="/src/common/tool-pics/gouqi.png" mode="aspectFill"></image>
            </view>

            <text class="text">各香粉占比</text>

        </navigator>

        <navigator class="navigator" url="/pages/xiangFangExtend/XiangFangExtend" hover-class="navigator-hover">

            <view class="image">
                <image src="/src/common/tool-pics/mei-gui.jpg" mode="aspectFill"></image>
            </view>

            <text class="text">香方放大器</text>

        </navigator>
    </view>
</template>

<script setup lang="ts">
    // 当前组件无逻辑，仅展示
</script>

<style lang="scss" scoped>
    .container {
        width: 700rpx;
        display: grid;
        grid-template-columns: repeat(2, 330rpx);
        gap: 50rpx 40rpx;
        border-radius: 20rpx;
        // border: 1rpx solid red;
        margin: 30rpx auto;

    }

    .navigator {
        width: 330rpx;
        height: 250rpx;
        border-radius: 20rpx;
        // border: 3rpx solid blue;
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
    }

    .image {
        width: 330rpx;
        height: 187rpx;
        overflow: hidden;
        border-radius: 20rpx 20rpx 0 0;
        // border: 1rpx solid black;
    }

    .text {
        width: 330rpx;
        height: 63rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1rpx solid $qianHuiSeBianKuang;
        background-color: $qianHeSeBeiJing;
        border-radius: 0 0 20rpx 20rpx;
        font-size: 40rpx;
        letter-spacing: 2rpx;
        color: $shenZongSeWenBen;
        // border: 1rpx solid purple;
    }
</style>