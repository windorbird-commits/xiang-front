<template>
    <view>
        <view class="table">
            <view class="title">
                <view class="name">
                    <text>材&ensp;料&ensp;名</text>
                </view>
                <view class="weight">
                    <text>重&ensp;量&ensp;(克)</text>
                </view>
                <view class="percent" v-if="showPercent">
                    <text>占&emsp;比</text>
                </view>
                <view class="remove" v-else>
                    <text>删&emsp;除</text>
                </view>
            </view>
            <view class="items">
                <view class="item" v-for="(item) in 3">
                    <view class="itemName">
                        檀香
                    </view>
                    <view class="itemWeight">
                        10
                    </view>
                    <view class="itemPercent" v-if="showPercent">
                        30%
                    </view>
                    <view class="removeAction" v-else>
                        <uv-icon name="close" color="#f48e4b" size="30"></uv-icon>
                    </view>
                </view>
            </view>
        </view>
        <view class="addXiangFen">
            <view class="input">
                <view class="left">
                    <uv-input border="none" placeholderStyle="font-size:30rpx" fontSize="40rpx" placeholder="请输入材料名"
                        customStyle="height:100rpx" maxlength="10"></uv-input>
                </view>
                <view class="right">
                    <uv-input border="none" placeholderStyle="font-size:30rpx" fontSize="40rpx" placeholder="请输入香粉重量"
                        customStyle="height:100rpx" maxlength="10"></uv-input>
                </view>
            </view>
            <button class="addButton">
                点&emsp;击&emsp;添&emsp;加
            </button>
        </view>
    </view>

</template>

<script lang="ts" setup>
    let showPercent = true;
</script>

<style lang="scss" scoped>
    .table {
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        // border: 1rpx solid red;
        margin: 30rpx 0 0 0;
        border-radius: 20rpx;
        width: 700rpx;
    }

    .title {
        // border: 1rpx solid blue;
        display: flex;
        background-color: $qianHeSeBeiJing;
        border-width: 0 0 1rpx;
        border-style: solid;
        border-color: $qianHuiSeBianKuang;
        border-radius: 20rpx 20rpx 0 0;
        height: 80rpx;

        .name {
            /* border: 1rpx solid pink; */
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $shenZongSeWenBen;

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
            border-color: $qianHuiSeBianKuang;
            color: $shenZongSeWenBen;

            text {
                font-size: 40rpx;
                letter-spacing: 5rpx;
            }
        }

        .percent {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $shenZongSeWenBen;

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
            color: $shenZongSeWenBen;

            text {
                font-size: 40rpx;
                letter-spacing: 5rpx;
            }
        }
    }

    .items {
        // border: 1rpx solid green;
    }

    .item {
        // border: 1rpx solid green;

        display: flex;
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

        .itemPercent {
            width: 200rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40rpx;
            color: #f48e4b;
        }

        .removeAction {
            width: 200rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .addXiangFen {
        width: 700rpx;
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        margin: 70rpx 0;
        border-radius: 20rpx;
        // border: 1rpx solid greenyellow;
    }

    .input {
        width: 700rpx;
        /* border: 1rpx solid black; */
        display: flex;
        align-items: center;
        justify-content: space-between;

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
        // /* border: 1rpx solid #343; */s
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $qianHeSeBeiJing;
        border-radius: 0 0 20rpx 20rpx;
    }
</style>