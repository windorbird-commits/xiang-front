<template>
    <view class="container">
        <view>
            <XiangFangDetail class="XiangFangDetail"></XiangFangDetail>
        </view>

        <view class="bottom">
            <view class="extendArea">
                <view class="extend">
                    <text>放大</text>
                    <view>
                        <uv-input border="bottom" placeholder="请输入粘粉百分比" fontSize="40rpx" customStyle="height:100rpx"
                            placeholderStyle="font-size:30rpx"></uv-input>
                        <text>倍</text>
                    </view>
                </view>
                <view class="reduce">
                    <text>缩小</text>
                    <view>
                        <uv-input border="bottom" placeholder="请输入粘粉百分比" fontSize="40rpx" customStyle="height:100rpx"
                            placeholderStyle="font-size:30rpx"></uv-input>
                    </view>
                    <text>倍</text>
                </view>

            </view>
            <view class="reset">还原</view>
        </view>
    </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .bottom {
        height: 500rpx;
        width: 700rpx;
        border: 1rpx solid red;
        display: flex;
        flex-direction: column;


        .extendArea {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1rpx solid blue;
            height: 100rpx;

            .extend {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1rpx solid yellow;
            }

            .reduce {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1rpx solid purple;
            }
        }

        .reset {
            height: 100rpx;
            width: 700rpx;
            border: 1rpx solid green;
        }
    }
</style>