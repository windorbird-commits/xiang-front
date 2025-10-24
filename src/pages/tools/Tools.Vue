<template>
    <view class="container">
        <navigator url="/pages/calculateNianFen/CalculateNianFen" hover-class="navigator-hover">
            <ToolComponent class="tool">
                <template v-slot:image>
                    <view class="image">
                        <image src="/src/common/tool-pics/dingxiang.png" mode="aspectFill"></image>
                    </view>
                </template>
                <template #text>

                    <uv-text class="text" text="粘粉加多少" align="center" color="#663d00" size="40rpx" margin="15rpx auto"
                        :customStyle="{letterSpacing: '1rpx'}"></uv-text>
                </template>
            </ToolComponent>
        </navigator>
        <navigator url="/pages/xiangFenPercentShow/XiangFenPercentShow" hover-class="navigator-hover">
            <ToolComponent class="tool">
                <template v-slot:image>
                    <view class="image">
                        <image src="/src/common/tool-pics/gouqi.png" mode="aspectFill"></image>
                    </view>
                </template>
                <template #text>
                    <uv-text class="text" text="各香粉占比" align="center" color="#663d00" size="40rpx" margin="15rpx auto"
                        :customStyle="{letterSpacing: '1rpx'}"></uv-text>
                </template>
            </ToolComponent>
        </navigator>
        <navigator url="/pages/xiangFangExtend/XiangFangExtend" hover-class="navigator-hover">
            <ToolComponent class="tool">
                <template v-slot:image>
                    <view class="image">
                        <image src="/src/common/tool-pics/mei-gui.jpg" mode="aspectFill"></image>
                    </view>
                </template>
                <template #text>
                    <uv-text class="text" text="香方放大器" align="center" color="#663d00" size="40rpx" margin="15rpx auto"
                        :customStyle="{letterSpacing: '1rpx'}"></uv-text>
                </template>
            </ToolComponent>
        </navigator>
    </view>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 20rpx;

        .navigator {
            border-radius: 20rpx;
            margin: 30rpx 20rpx;

        }

        .tool {
            border-radius: 20rpx;
            box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        }

        &:last-child {
            justify-content: left;
            border-radius: 20rpx;
        }
    }



    .image {
        width: 100%;
        height: 170rpx;
        // border: 2px solid blue;
        overflow: hidden;
        border-radius: 20rpx 20rpx 0 0;
    }

    .text {
        border-radius: 0 0 20rpx 20rpx;
    }
</style>