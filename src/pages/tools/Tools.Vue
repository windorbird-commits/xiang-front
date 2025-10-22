<template>
    <view class="container">
        <view v-for="item in 10" class="tool">
            <tool-component></tool-component>
        </view>
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
    }

    .tool {
        margin: 20rpx;
    }
</style>