<template>
    <view class="container">
        <view class="topLayout">
            <view class="title">
                <view class="name">
                    <text>材料名</text>
                </view>
                <view class="weight">
                    <text>重量</text>
                </view>
                <view class="remove">
                    <text>删除</text>
                </view>
            </view>
            <view class="items">
                <view class="itemss" v-for="(item) in 3">
                    <view class="itemName">
                        檀香
                    </view>
                    <view class="itemWeight">
                        10
                    </view>
                    <view class="removeAction">
                        <uv-icon name="close" color="red" size="30"></uv-icon>
                    </view>
                </view>
            </view>
        </view>

        <view class="addNianFen">
            <view class="input">
                <view class="left">
                    <uv-input placeholder="请输入材料名" prefixIconStyle="font-size: 22px;color: #909399"></uv-input>
                </view>
                <view class="right">
                    <uv-input placeholder="请输入重量" prefixIconStyle="font-size: 22px;color: #909399"></uv-input>
                </view>
            </view>
            <view class="addButton">
                点击添加
            </view>
        </view>

        <view class='nianfenGroup'>
            <view class="nianfenInput">
                <view class="nianfenDesc">
                    粘粉比例
                </view>
                <view class="percent">
                    <uv-input placeholder="请输入粘粉百分比" prefixIconStyle="font-size: 22px;color: #909399"></uv-input>
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

<style>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .topLayout {
        box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.2);
        margin: 70rpx 0 0 0;
        border-radius: 20rpx;
    }

    .title {
        /* border: 1rpx solid red; */
        height: 100rpx;
        display: flex;
        width: 700rpx;
        background-color: #f5e6d3;
        border-width: 0 0 1rpx;
        border-style: solid;
        border-color: #aaa;

        .name {
            /* border: 1rpx solid pink; */
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            text {
                font-size: 40rpx;
                letter-spacing: 5rpx;
            }
        }

        .weight {
            /* border: 1rpx solid purple; */
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border-width: 0 1rpx;
            border-style: solid;
            border-color: #aaa;

            text {
                font-size: 40rpx;
                letter-spacing: 5rpx;
            }
        }

        .remove {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            text {
                font-size: 40rpx;
                letter-spacing: 5rpx;
            }
        }
    }

    .itemss {
        /* border: 1rpx solid green; */
        height: 80rpx;
        display: flex;
        width: 700rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .itemName {
            width: 200rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40rpx;
        }

        .itemWeight {
            width: 200rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40rpx;
        }

        .removeAction {
            width: 200rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .addNianFen {
        box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.2);
        margin: 70rpx 0;
        border-radius: 20rpx;
    }

    .input {
        width: 700rpx;
        /* border: 1rpx solid black; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30rpx 0 0 0;

        .left {
            width: 300rpx;
            margin: 0 0 0 20rpx;
        }

        .right {
            width: 300rpx;
            margin: 0 20rpx 0 0;
        }
    }

    .addButton {
        width: 700rpx;
        height: 80rpx;
        /* border: 1rpx solid #343; */
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30rpx 0 0 0;
        background-color: green;
        border-radius: 0 0 20rpx 20rpx;
        letter-spacing: 30rpx;
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
            background-color: aquamarine;
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
        }

        .save {
            width: 300rpx;
            height: 90rpx;
            /* border: 1rpx solid blue; */
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: lawngreen;
            letter-spacing: 3rpx;
            border-radius: 20rpx;
            box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.2);
        }
    }
</style>