<template>
    <view class="container">
        <view class="top">
            <uv-text :text="xiangFangName" bold align="center" color="'var(--shen-zong-se-zi)'" :lineHeight="2"
                size="50rpx" :customStyle="{letterSpacing: '5rpx'}"></uv-text>
        </view>
        <view class="mid">
            <uv-text :text="xiangFangDesc" size="40rpx" :customStyle="{letterSpacing: '4rpx'}" :lines="2"
                lineHeight="60rpx" wordWrap="anywhere"></uv-text>
        </view>
        <view class="bottom">
            <!-- 占位符 -->
            <!-- <view class="bot-left">
            
            </view>
            <view class="bot-mid">  </view> -->

            <view class="bot-right">
                <view class="collect-container">
                    <uv-icon name="star" size="40rpx"></uv-icon>
                    <uv-text size="35rpx" text="收藏" margin="0 10rpx"></uv-text>
                </view>
            </view>
        </view>

    </view>
</template>


<script setup lang="ts">
    import { ref } from "vue";
    let xiangFangName = ref("")
    xiangFangName.value = "宣和内府降真香"
    let xiangFangDesc = ref("")
    xiangFangDesc.value = "这是一款具有悠久历史的传统香方，选用优质天然香料精心调配而成，香气醇厚持久，具有安神静心的功效。适合在冥想、阅读或休息时使用，能够营造出宁静祥和的氛围。"
</script>

<style lang="scss" scoped>
    .container {
        width: 700rpx;
        height: 300rpx;
        // border: 1px solid red;
        border-radius: 20rpx;
        /* 添加Flex布局确保垂直排列 */
        display: flex;
        flex-direction: column;
        /*增加阴影效果*/
        box-shadow: 2px 3px 5px 5px $qingYinYing;
    }



    .top {
        width: 100%;
        height: 30%;
        border-width: 0 0 1rpx 0;
        border-style: solid;
        border-color: $qianHuiSeBianKuang;
        background-color: $qianHeSeBeiJing;
        /* 使用Flex布局确保内容居中 */
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20rpx 20rpx 0 0;
    }

    .mid {
        width: 100%;
        height: 50%;
        /* border: 2px solid blue; */
        /* 使用Flex布局确保内容铺满 */
        display: flex;
        padding: 15rpx;
    }

    .bottom {
        width: 100%;
        height: 20%;
        border-width: 1rpx 0 0 0;
        border-style: solid;
        border-color: $qianHuiSeBianKuang;
        /* 使用Flex布局 */
        display: flex;
        // background-color: $qianHeSeBeiJing;
        border-radius: 0 0 25rpx 25rpx;
    }

    .bot-left {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10rpx;
    }

    .bot-mid {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-width: 0 1rpx;
        border-style: solid;
        border-color: $qianHuiSeBianKuang;
    }

    .bot-right {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 10rpx;

        .collect-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>