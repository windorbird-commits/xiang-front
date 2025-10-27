<template>
    <view class="container">
        <view>
            <xiang-fang-detail class="XiangFangDetail"></xiang-fang-detail>
        </view>

        <view class="bottom">
            <view class="extendArea">
                <view class="extend">
                    <text class="fangda">放&emsp;大</text>
                    <view class="input">
                        <uv-input inputAlign="center" border="bottom" placeholder="请输入倍数" fontSize="40rpx"
                            customStyle="height:100rpx" placeholderStyle="font-size:30rpx"></uv-input>
                    </view>
                    <text class="bei">倍</text>
                </view>
                <view>
                    <button class="confirm">确&emsp;定</button>
                </view>
            </view>
            <view>
                <button class="reset">还&emsp;&emsp;原</button>
            </view>
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
        // border: 1rpx solid red;
        display: flex;
        flex-direction: column;


        .extendArea {
            display: flex;
            align-items: center;
            justify-content: space-between;
            // border: 1rpx solid darkblue;
            height: 100rpx;

            .extend {
                display: flex;
                align-items: center;
                justify-content: space-between;
                // border: 1rpx solid darkmagenta;
                height: 100%;
                border-radius: 20rpx;
                box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;


                .fangda {
                    width: 150rpx;
                    font-size: 40rpx;
                    color: $shenZongSeWenBen;
                    padding-left: 30rpx;
                    // border: 1rpx solid darkmagenta;
                }

                .input {
                    width: 230rpx;
                    // border: 1rpx solid red;
                }

                .bei {
                    width: 70rpx;
                    font-size: 40rpx;
                    color: $shenZongSeWenBen;
                    padding-right: 30rpx;
                    // border: 1rpx solid blue;
                }
            }

            .confirm {
                width: 200rpx;
                height: 100rpx;
                background-color: $lvSeAnNiu;
                font-size: 40rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;

                // 添加按钮交互效果
                &:active {
                    background-color: #3a9b61;
                }
            }
        }

        .reset {
            margin: 70rpx 0;
            height: 100rpx;
            width: 700rpx;
            // border: 1rpx solid green;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $danYaSeBeiJing;
            box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
            border-radius: 20rpx;
            font-size: 40rpx;
            color: $shenZongSeWenBen;

            // 添加按钮交互效果
            &:active {
                background-color: darken($qianHeSeBeiJing, 10%);
            }

        }
    }
</style>