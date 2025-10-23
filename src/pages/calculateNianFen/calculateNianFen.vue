<template>
    <view class="container">
        <xiangFangDetail class="xiangFangDetail"></xiangFangDetail>
        <addXiangFen class="addXiangFen"></addXiangFen>

        <view class='nianfenGroup'>
            <view class="nianfenInput">
                <view class="nianfenDesc">
                    粘粉比例
                </view>
                <view class="percent">
                    <uv-input border="bottom" placeholder="请输入粘粉百分比" fontSize="40rpx"
                        placeholderStyle="font-size:30rpx"></uv-input>
                </view>
                <view class="iconPercent">
                    <text>%</text>
                </view>
            </view>
            <view class="confirmButton">
                确定
            </view>
        </view>

        <view class="actions">
            <view class="reset">
                重置
            </view>
            <view class="save">
                保存为我的香方
            </view>
        </view>

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
        box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.2);
        border-radius: 20rpx;


        .confirmButton {
            display: flex;
            align-items: center;
            justify-content: center;
            /* border: 1rpx solid red; */
            width: 100%;
            height: 80rpx;
            background-color: #f5e6d3;
            border-radius: 0 0 20rpx 20rpx;
            letter-spacing: 50rpx;
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
            height: 80rxp;
            width: 300rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .iconPercent {
            font-size: 40rpx;
            font-weight: bold;
            margin: 0 20rpx;
        }
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 700rpx;
        margin: 80rpx 0 0 0;

        .reset {
            width: 300rpx;
            /* border: 1rpx solid red; */
            height: 80rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: burlywood;
            letter-spacing: 20rpx;
            border-radius: 20rpx;
            box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.2);
            color: white;
            font-size: 40rpx;
        }

        .save {
            width: 300rpx;
            height: 90rpx;
            /* border: 1rpx solid blue; */
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #3cc51f;
            letter-spacing: 3rpx;
            border-radius: 20rpx;
            box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.2);
            color: white;
            font-size: 30rpx;
        }
    }
</style>