<template>
    <view class="addXiangFen">
        <view class="input">
            <view class="left">
                <uv-input border="none" placeholderStyle="font-size:30rpx" fontSize="40rpx" placeholder="请输入材料名"
                    maxlength="10"></uv-input>
            </view>
            <view class="right">
                <uv-input border="none" placeholderStyle="font-size:30rpx" fontSize="40rpx" placeholder="请输入重量"
                    maxlength="10"></uv-input>
            </view>
        </view>
        <view class="addButton">
            点击添加
        </view>
    </view>
    <view>
        <uv-popup ref="popup" mode="center" @change="change">
            <view style="width: 600rpx;">
                <text>丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。 明月几时有？把酒问青天。
                    不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
                    转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。
                    但愿人长久，千里共婵娟。</text>
            </view>
        </uv-popup>
        <button @click="open">打开</button>
    </view>
</template>

<script setup> 
    import { ref } from 'vue'

    let popup = ref(null);
    function open() {
        popup.value.open();
    }

    function change(e) {
        console.log('弹窗状态改变：', e);
    }
</script>

<style lang="scss" scoped>
    .addXiangFen {
        box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.2);
        margin: 70rpx 0;
        border-radius: 20rpx;
    }

    .input {
        // width: 700rpx;
        /* border: 1rpx solid black; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30rpx 0 0 0;

        .left {
            width: 300rpx;
        }

        .right {
            width: 300rpx;
        }
    }

    .addButton {
        // width: 700rpx;
        height: 80rpx;
        /* border: 1rpx solid #343; */
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5e6d3;
        border-radius: 0 0 20rpx 20rpx;
        letter-spacing: 30rpx;
    }
</style>