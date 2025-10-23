<template>
    <view class="container">
        <navigator url="/pages/calculateNianFen/calculateNianFen" hover-class="navigator-hover">
            <ToolComponent class="tool">
                <template v-slot:image>
                    <view class="image">
                        <image src="/src/common/tool-pics/dingxiang.png" mode="aspectFill"></image>
                    </view>
                </template>
                <template #text>

                    <uv-text text="粘粉加多少" align="center" color="#663d00" size="40rpx" margin="15rpx auto"
                        :customStyle="{letterSpacing: '1rpx'}"></uv-text>
                </template>
            </ToolComponent>
        </navigator>
        <navigator url="/pages/checkNianFen/checkNianFen" hover-class="navigator-hover">
            <ToolComponent class="tool">
                <template v-slot:image>
                    <view class="image">
                        <image src="/src/common/tool-pics/gouqi.png" mode="aspectFill"></image>
                    </view>
                </template>
                <template #text>
                    <uv-text text="粘粉占比多少" align="center" color="#663d00" size="40rpx" margin="15rpx auto"
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
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        navigator {
            margin: 30rpx 15rpx;
        }
    }



    .image {
        width: 100%;
        padding: 0 10rpx;
        height: 170rpx;
        // border: 2px solid blue;
        overflow: hidden;
    }
</style>