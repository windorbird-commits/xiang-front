<template>
    <view>
        <view class="actions">
            <view v-if="true">
                <button class="reset" @click="clear">清&emsp;空</button>
            </view>
            <view v-else>
                <button class="reset">收&emsp;藏</button>
            </view>
            <view>
                <button class="save" @click="open">保存为我的香方</button>
            </view>
        </view>

        <view>
            <uv-popup ref="popup" mode="center" @change="change" overlayOpacity="0.85" round="20rpx" bgColor="#f7f1e3"
                :customStyle="{ transform: 'translateY(-270rpx)' }">
                <view class="popInner">
                    <view class="popText">
                        <text class='popTextInner'>给香方起一个好听名字吧</text>
                        <text class='popTextInnerNote'>（不输入，默认使用原名）</text>
                    </view>
                    <view class="popInput">
                        <uv-input inputAlign="center" border="bottom" placeholderStyle="font-size:30rpx"
                            fontSize="40rpx" placeholder="请输入香方名" maxlength="10" customStyle="height:100rpx"></uv-input>
                    </view>
                    <view class="popSelect">
                        <view>线香</view>
                        <view>线香</view>
                        <view>线香</view>
                        <view>线香</view>
                    </view>
                    <view class="popButton">
                        <view>
                            <button class="popBackBtn">返&emsp;回</button>
                        </view>
                        <view>
                            <button class="confirmBtn">确&emsp;定</button>
                        </view>
                    </view>
                </view>
            </uv-popup>
        </view>
    </view>
</template>

<script lang="ts" setup>
    import {
        ref,
        inject
    } from 'vue';
    import { useXiangFangStore } from '@/stores/xiangFangStore';

    let popup = ref(null);
    const xiangFangStore = useXiangFangStore();

    function open() {
        popup.value.open();
    }

    function change(e) {
        console.log('弹窗状态改变：', e);
    }

    function clear() {
        xiangFangStore.clearAll();
    }
</script>

<style lang="scss">
    .actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 700rpx;

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

        .save {
            width: 300rpx;
            height: 100rpx;
            /* border: 1rpx solid blue; */
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $lvSeAnNiu;
            letter-spacing: 3rpx;
            border-radius: 20rpx;
            box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
            color: $baiSeWenBen;
            font-size: 30rpx;
        }
    }

    .popInner {
        // border: 1rpx solid blue;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 700rpx;
        margin-top: 20rpx;


        .popTextInner {
            // margin: 10rpx;
            font-size: 40rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            text {
                color: $shenZongSeWenBen;
            }
        }

        .popTextInnerNote {
            margin: 10rpx 0 20rpx 0;
            font-size: 40rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 25rpx;

            text {
                color: $shenZongSeWenBen;
            }
        }


        .popInput {
            // border: 1px solid red;
            height: 80rpx;
            width: 500rpx;
        }

        .popSelect {
            // width: 80%;
            height: 80rpx;
            // border: 1px solid blue;
            display: flex;
            margin-top: 30rpx;
            align-items: center;
            justify-content: center;
            flex-direction: row;

        }

        .popButton {
            width: 500rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            // border: 1rpx solid blue;
            margin: 20rpx;

            .popBackBtn {
                width: 200rpx;
                height: 80rpx;
                background-color: $chengSeAnNiu;
                color: $baiSeWenBen
            }

            .confirmBtn {
                width: 200rpx;
                height: 80rpx;
                background-color: $lvSeAnNiu;
                color: $baiSeWenBen;
            }
        }
    }
</style>