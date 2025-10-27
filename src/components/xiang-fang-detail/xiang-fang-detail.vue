<template>
    <view>
        <view class="xiangFangName">
            <text class="name">鹅梨帐中香</text>
            <view class="type">
                <text>线香&emsp;</text>
                <text>合香珠&emsp;</text>
                <text>香篆</text>
            </view>

        </view>

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
                    <view class="itemPercent" v-if="true">
                        30%
                    </view>
                    <view class="removeAction" v-else>
                        <uv-icon name="close" color="#f48e4b" size="30"></uv-icon>
                    </view>
                </view>
            </view>
        </view>
        <view class="addXiangFen" v-if="true">
            <view class="input">
                <view class="left">
                    <uv-input border="none" v-model="materialName" placeholderStyle="font-size:30rpx" fontSize="40rpx"
                        placeholder="请输入材料名" customStyle="height:100rpx;padding-left:30rpx" inputAlign="center"
                        maxlength="10"></uv-input>
                </view>
                <view class="right">
                    <uv-input border="none" inputAlign="center" placeholderStyle="font-size:30rpx" fontSize="40rpx"
                        placeholder="请输入材料重量" type="digit" customStyle="height:100rpx" maxlength="10"></uv-input>
                </view>
            </view>
            <button class="addButton">
                点&emsp;击&emsp;添&emsp;加
            </button>
        </view>
    </view>

</template>

<script setup>
    // import {
    //     watch
    // } from 'fs';

    let showPercent = true;

    let materialName = ""

    // watch(materialName, (materialNameNew) => {
    //     console.log("old-materialName:", materialName)
    //     console.log("new-materialName:", materialNameNew)
    // })
</script>

<style lang="scss" scoped>
    // 公共样式
    %center-flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    %title-text {
        font-size: 40rpx;
        letter-spacing: 5rpx;
        color: $shenZongSeWenBen;
    }

    %item-cell {
        width: 200rpx;
        @extend %center-flex;
        font-size: 40rpx;
    }

    .xiangFangName {
        margin: 30rpx 0;
        width: 700rpx;
        // border: 1rpx solid red;
        // height: 100rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        letter-spacing: 2rpx;
        font-size: 50rpx;
        font-weight: bold;
        border-radius: 20rpx;
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        color: $shenZongSeWenBen;

        .name {
            height: 120rpx;
            width: 100%;
            // border: 1rpx solid red;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 3rpx;
        }

        .type {
            height: 80rpx;
            width: 100%;
            // border: 1rpx solid blue;
            font-size: 25rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }

    .table {
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        margin: 50rpx 0 0 0;
        border-radius: 20rpx;
        width: 700rpx;
    }

    .title {
        @extend %center-flex;
        background-color: $qianHeSeBeiJing;
        border-width: 0 0 1rpx;
        border-style: solid;
        border-color: $qianHuiSeBianKuang;
        border-radius: 20rpx 20rpx 0 0;
        height: 100rpx;

        .name,
        .weight,
        .percent,
        .remove {
            flex-grow: 1;
            @extend %center-flex;

            text {
                @extend %title-text;
            }
        }

        .weight {
            border-width: 0 1rpx;
            border-style: solid;
            border-color: $qianHuiSeBianKuang;
        }
    }

    .item {
        padding: 10rpx 0;

        @extend %center-flex;
        justify-content: space-between;

        // 添加hover效果
        &:hover {
            background-color: rgba($qianHeSeBeiJing, 0.3);
        }

        .itemName,
        .itemWeight {
            @extend %item-cell;
        }

        .itemPercent {
            @extend %item-cell;
            color: $chengSeAnNiu;
        }

        .removeAction {
            @extend %item-cell;
            cursor: pointer;

            // 添加点击效果
            &:active {
                transform: scale(0.9);
            }
        }
    }

    .addXiangFen {
        width: 700rpx;
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        margin: 70rpx 0;
        border-radius: 20rpx;
    }

    .input {
        width: 700rpx;
        @extend %center-flex;
        justify-content: space-between;

        .left,
        .right {
            width: 300rpx;
        }
    }

    .addButton {
        height: 80rpx;
        @extend %center-flex;
        background-color: $qianHeSeBeiJing;
        border-radius: 0 0 20rpx 20rpx;
        color: $shenZongSeWenBen;
        font-size: 36rpx;
        letter-spacing: 5rpx;

        // 添加按钮交互效果
        &:active {
            background-color: darken($qianHeSeBeiJing, 10%);
        }
    }
</style>