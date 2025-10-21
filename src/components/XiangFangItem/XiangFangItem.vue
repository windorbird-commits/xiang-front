<template>
    <view class="container">
        <view class="top">
            <uv-text 
                :text="xiangFangName" 
                :customStyle="topTitleProp"
                bold
                align="center"
                :lineHeight="1.5"
            ></uv-text>
        </view>
        <view class="mid">
            <uv-text 
                text="香方描述：这是一款具有悠久历史的传统香方，选用优质天然香料精心调配而成，香气醇厚持久，具有安神静心的功效。适合在冥想、阅读或休息时使用，能够营造出宁静祥和的氛围。"
                :lines="2"
                color="#666666"
                size="28rpx"
                :lineHeight="1.6"
                wordWrap="break-word"
            ></uv-text>
        </view>
        <view class="bottom">
            <view class="bot-left">
                <text>
                    aaa
                </text>
            </view>
        </view>

    </view>
</template>


<script setup lang="ts">
    import { ref } from "vue";
    let xiangFangName = ref("")
    xiangFangName.value = "宣和内府降真香"

    let topTitleProp = ref({
        "color": "#6f5453",
        "size": "50rpx",
        "align": "center"
    })
</script>

<style scoped>
    .container {
        width: 700rpx;
        height: 300rpx;
        /* border: 1px solid red; */
        border-radius: 25rpx;
        /* 添加Flex布局确保垂直排列 */
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        /*增加阴影效果*/
        box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.5);
    }



    .top {
        width: 100%;
        height: 30%;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 2rpx;
        border-style: solid;
        border-color: #aaa;
        background-color: #d1b68e;
        /* 使用Flex布局 */
        display: flex;
        box-sizing: border-box;
        border-radius: 25rpx 25rpx 0 0;

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            color: #6f5453;
            font-size: 50rpx;
            letter-spacing: 5rpx;
            font-weight: bold;
        }
    }

    .mid {
        width: 100%;
        height: 50%;
        /* border: 2px solid blue; */
        /* 确保块级显示 */
        display: block;
        box-sizing: border-box;
        background-color: #f5e6d3;
        padding: 10rpx;

    }

    .bottom {
        width: 100%;
        height: 20%;
        border-top: 1rpx;
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
        border-style: solid;
        border-color: #aaa;
        /* 确保块级显示 */
        display: block;
        box-sizing: border-box;
        background-color: #f5e6d3;
        border-radius: 0 0 25rpx 25rpx;
    }
</style>