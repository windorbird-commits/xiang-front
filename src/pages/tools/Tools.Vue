<template>
    <view class="container">
        <view v-for="(item,index) in 10" class="tool">
            <tool-component>{{index}}</tool-component>
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
        margin: 30rpx 15rpx;
    }
</style>