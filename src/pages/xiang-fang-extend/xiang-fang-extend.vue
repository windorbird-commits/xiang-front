<template>
    <view class="container">
        <view>
            <xiang-fang-detail v-bind:xiangFangStore="extendXiangFangStore" class="XiangFangDetail"></xiang-fang-detail>
        </view>

        <view class="bottom">
            <view class="extendArea">
                <view class="extend">
                    <text class="fangda">放&emsp;大</text>
                    <view class="input">
                        <uv-input color="red" type="digit" v-model="extendXiangFangStore.extendNum" inputAlign="center"
                            border="bottom" placeholder="请输入倍数" maxlength="4" fontSize="40rpx"
                            customStyle="height:100rpx" placeholderStyle="font-size:30rpx"></uv-input>
                    </view>
                    <text class="bei">倍</text>
                </view>
                <view>
                    <button class="confirm" @click="extend">确&emsp;定</button>
                </view>
            </view>
            <view class="buttonGrop">
                <view>
                    <button class="clear" @click="clear">清&emsp;空</button>
                </view>
                <view>
                    <button class="reset" @click="reset">还&emsp;&emsp;原</button>
                </view>
            </view>

        </view>
    </view>
</template>

<script setup lang="ts">
    import {
        useExtendXiangFangStore
    } from '@/stores/extend-xiang-fang';

    const extendXiangFangStore = useExtendXiangFangStore()

    function extend() {
        extendXiangFangStore.extend()
    }
    function reset() {
        extendXiangFangStore.reset();
    }
    function clear() {
        extendXiangFangStore.clearAll()
    }
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
                background-color: $qianHeSeBeiJing;
                font-size: 40rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                color: $shenZongSeWenBen;
                box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;

                // 添加按钮交互效果
                &:active {
                    background-color: #3a9b61;
                }
            }
        }

        .buttonGrop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 700rpx;
            margin-top: 70rpx;

            .clear,
            .reset {
                width: 300rpx;
                /* border: 1rpx solid red; */
                height: 100rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $chengSeAnNiu;
                border-radius: 20rpx;
                box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
                color: $baiSeWenBen;
                font-size: 40rpx;
            }

            .reset {
                background-color: $lvSeAnNiu;
            }
        }


    }
</style>