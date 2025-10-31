<template>
    <view class="container">
        <xiang-fang-detail v-bind:xiangFangStore="calculateNianFenStore" ref="xiangFangDetailRef"
            class="xiangFangDetail"></xiang-fang-detail>

        <view class='nianfenGroup'>
            <view class="nianfenInput">
                <view class="nianfenDesc">
                    粘粉比例
                </view>
                <view class="percent">
                    <uv-input color="#1e90ff" v-model="calculateNianFenStore.nianFenPercent" type="digit"
                        inputAlign="center" border="none" placeholder="请输入粘粉百分比" maxlength="6" fontSize="40rpx"
                        customStyle="height:100rpx" placeholderStyle="font-size:30rpx" @blur="checkNum"></uv-input>
                    <!-- @input="checkNum" 在安卓机打开页面的时候，触发input事件 -->
                </view>
                <view class="iconPercent">
                    <text>%</text>
                </view>
            </view>
            <view>
                <button class="confirmButton" @click="addNianFen">确&emsp;&emsp;定</button>
            </view>
        </view>
        <save-xiang-fang v-bind:xiangFangStore="calculateNianFenStore"></save-xiang-fang>
        <uv-toast ref="toastRef"></uv-toast>
    </view>
</template>

<script setup>
    import {
        ref,
        computed
    } from 'vue';
    import {
        useCalculateNianFenStore
    } from '@/stores/calculateNianFenStore';
    import {
        storeToRefs
    } from 'pinia';

    const calculateNianFenStore = useCalculateNianFenStore();
    const xiangFangDetailRef = ref(null);


    // 计算属性：验证材料列表
    const isValidCompose = computed(() => {

        return calculateNianFenStore.xiangFang.compose && calculateNianFenStore.xiangFang.compose.length > 0 &&
            calculateNianFenStore.xiangFang.compose.length <= 30
    })

    // 计算属性：检查是否已添加粘粉
    const hasAdminAddedNianFen = computed(() => {
        return calculateNianFenStore.xiangFang.compose?.some(item => item.isAdminAddedNianFen) || false
    })

    // 修改后的函数，使用 store 中的数据
    function addNianFen() {
        // 验证材料列表
        if (!isValidCompose.value) {
            console.log("材料不能为空或超过30个材料")
            return
        }

        // 检查是否已添加粘粉
        if (hasAdminAddedNianFen.value) {
            openToast("已经添加了粘粉了")
            return
        }

        // 验证并获取粘粉比例
        const nianFenPercent = calculateNianFenStore.nianFenPercent;
        const trimmedNianFenPercent = nianFenPercent?.toString().trim() || "";

        if (!trimmedNianFenPercent || isNaN(trimmedNianFenPercent)) {
            openToast("粘粉比例不能为空或不是数字")
            return
        }

        const percent = Number(trimmedNianFenPercent)

        if (!checkNum(percent)) {
            return
        }

        // 计算总重量和粘粉重量
        const totalWeight = calculateNianFenStore.xiangFang.compose.reduce(
            (sum, item) => sum + Number(item.weight), 0
        )

        const allTotal = totalWeight / (1 - percent / 100)
        const nianFenWeight = allTotal - totalWeight

        // 添加粘粉到材料列表
        calculateNianFenStore.xiangFang.compose.push({
            name: "粘粉",
            weight: Math.round(nianFenWeight * 100) / 100, // 保留两位小数
            isAdminAddedNianFen: true,
        })

        // 重置粘粉比例
        calculateNianFenStore.nianFenPercent = null
    }


    function checkNum(value) {
        // 确保值是数字类型
        const numValue = Number(value)
        console.log("value:", value, "numValue:", numValue, "typeof value:", typeof value, "typeof numValue:",
            typeof numValue)
        if (isNaN(numValue) || numValue >= 100 || numValue <= 0) {
            openToast("粘粉所占比例应在1~99之间")
            return false
        }
        toastRef.value?.hide()
        return true
    }


    let toastRef = ref(null)
    // 调用 show 方法
    function openToast(message) {
        // 使用可选链操作符简化判断
        toastRef.value?.show({
            type: 'default',
            icon: false,
            overlay: false,
            message: message
        });
    }
</script>

<style lang="scss" scoped>
    // 通用变量
    $card-width: 700rpx;
    $border-radius: 20rpx;
    $button-height: 80rpx;

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .xiangFangDetail {
        width: $card-width;
    }

    .addXiangFen {
        width: $card-width;
    }

    .nianfenGroup {
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        border-radius: $border-radius;
        margin-bottom: 70rpx;

        .confirmButton {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: $button-height;
            background-color: $qianHeSeBeiJing;
            border-radius: 0 0 $border-radius $border-radius;
            transition: background-color 0.3s;

            &:active {
                background-color: darken($qianHeSeBeiJing, 10%);
            }
        }
    }

    .nianfenInput {
        width: $card-width;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nianfenDesc {
            height: $button-height;
            width: 300rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 20rpx;
        }

        .percent {
            width: 300rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .iconPercent {
            font-size: 40rpx;
            font-weight: bold;
            margin: 0 20rpx;
            color: $chengSeAnNiu;
        }
    }
</style>