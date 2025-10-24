<template>
    <view class="container">
        <navigator class="navigator" url="/pages/calculateNianFen/CalculateNianFen" hover-class="navigator-hover">
            <ToolComponent>
                <template v-slot:image>
                    <view class="image">
                        <image src="/src/common/tool-pics/dingxiang.png" mode="aspectFill"></image>
                    </view>
                </template>
                <template #text>
                    <text class="text">粘粉加多少</text>
                </template>
            </ToolComponent>
        </navigator>
        <navigator class="navigator" url="/pages/xiangFenPercentShow/XiangFenPercentShow" hover-class="navigator-hover">
            <ToolComponent>
                <template v-slot:image>
                    <view class="image">
                        <image src="/src/common/tool-pics/gouqi.png" mode="aspectFill"></image>
                    </view>
                </template>
                <template #text>
                    <text class="text">各香粉占比</text>
                </template>
            </ToolComponent>
        </navigator>
        <navigator class="navigator" url="/pages/xiangFangExtend/XiangFangExtend" hover-class="navigator-hover">
            <ToolComponent>
                <template v-slot:image>
                    <view class="image">
                        <image src="/src/common/tool-pics/mei-gui.jpg" mode="aspectFill"></image>
                    </view>
                </template>
                <template #text>
                    <text class="text">香方放大器</text>
                </template>
            </ToolComponent>
        </navigator>
    </view>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 20rpx;

        .navigator {
            border-radius: 20rpx;
            margin: 30rpx 25rpx;
            // border: 1rpx solid red;
        }



        &:last-child {
            justify-content: left;
            border-radius: 20rpx;
        }
    }



    .image {
        width: 100%;
        height: 170rpx;
        // border: 2px solid blue;
        overflow: hidden;
        border-radius: 20rpx 20rpx 0 0;
    }

    .text {
        width: 100%;
        height: 80rpx;
        border: 2rpx, solid pink;
        border-width: 1rpx 0 0 0;
        border-style: solid;
        border-color: $qianHuiSeBianKuang;
        background-color: $qianHeSeBeiJing;
        border-radius: 0 0 20rpx 20rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40rpx;
        letter-spacing: 2rpx;
        color: $shenZongSeWenBen
    }
</style>