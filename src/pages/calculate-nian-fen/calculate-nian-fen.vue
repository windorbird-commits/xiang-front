<template>
    <view class="container">
        <xiang-fang-detail class="xiangFangDetail"></xiang-fang-detail>

        <view class='nianfenGroup'>
            <view class="nianfenInput">
                <view class="nianfenDesc">
                    粘粉比例
                </view>
                <view class="percent">
                    <uv-input inputAlign="center" border="none" placeholder="请输入粘粉百分比" fontSize="40rpx"
                        customStyle="height:100rpx" placeholderStyle="font-size:30rpx"></uv-input>
                </view>
                <view class="iconPercent">
                    <text>%</text>
                </view>
            </view>
            <view>
                <button class="confirmButton">确&emsp;&emsp;定</button>
            </view>
        </view>
        <save-xiang-fang></save-xiang-fang>>
    </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .xiangFangDetail {
        width: 700rpx
    }

    .addXiangFen {
        width: 700rpx;
    }

    .nianfenGroup {
        /* margin: 70rpx 0; */
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        border-radius: 20rpx;
        margin: 0 0 70rpx 0;


        .confirmButton {
            display: flex;
            align-items: center;
            justify-content: center;
            /* border: 1rpx solid red; */
            width: 100%;
            height: 80rpx;
            background-color: $qianHeSeBeiJing;
            border-radius: 0 0 20rpx 20rpx;
        }
    }


    .nianfenInput {
        width: 700rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* border: 1rpx solid red; */

        .nianfenDesc {
            /* border: 1rpx solid black; */
            height: 80rpx;
            width: 300rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 20rpx;
        }

        .percent {
            /* border: 1rpx solid blue; */
            width: 300rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .iconPercent {
            font-size: 40rpx;
            font-weight: bold;
            margin: 0 20rpx;
            color: $chengSeAnNiu;
        }
    }
</style>