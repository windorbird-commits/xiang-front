<template>
    <view class="topLayout">
        <view class="title">
            <view class="name">
                <text>材&ensp;料&ensp;名</text>
            </view>
            <view class="weight">
                <text>重&emsp;量</text>
            </view>
            <view class="remove">
                <text>删&emsp;除</text>
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
                    <uv-icon name="close" color="#f48e4b" size="30"></uv-icon>
                </view>
            </view>
        </view>
    </view>
</template>

<script>

</script>

<style lang="scss" scoped>
    .topLayout {
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        margin: 70rpx 0 0 0;
        border-radius: 20rpx;
    }

    .title {
        /* border: 1rpx solid red; */
        height: 100rpx;
        display: flex;
        background-color: $qianHeSeBeiJing;
        border-width: 0 0 1rpx;
        border-style: solid;
        border-color: $qianHuiSeBianKuang;
        border-radius: 20rpx 20rpx 0 0;

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

    .itemss {
        /* border: 1rpx solid green; */
        height: 80rpx;
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

        .removeAction {
            width: 200rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>