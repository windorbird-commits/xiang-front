<template>
    <view>
        <view class="xiangFangName" v-if="xiangFangNameLength>0">
            <text class="name">{{xiangFangName}}</text>
            <view class="useFor" v-if="xiangFangUseFor.length>0">
                <template v-for="(item) in xiangFangUseFor">
                    <text> {{item}}&emsp; </text>
                </template>
            </view>
        </view>

        <view class="table">
            <view class="title">
                <view class="name">
                    <text>材料名</text>
                </view>
                <view class="weight">
                    <text>重量(克)</text>
                </view>
                <view class="percent">
                    <text>占&emsp;比</text>
                </view>
                <view class="remove">
                    <text>删&emsp;除</text>
                </view>
            </view>
            <view class="items">
                <view class="item" v-for="(item, index) in xiangFangCompose" :key="`${item.name}-${item.weight}`"
                    :class="{itemDarkBack:index%2===1}">

                    <view :class="item.name.length<=3?itemNameClass:itemNameLongClass">
                        {{item.name}}
                    </view>

                    <view class="itemWeight">
                        {{item.weight}}
                    </view>

                    <view class="itemPercent">
                        {{toPercentage(item.weight, totalWeight)}}
                    </view>

                    <view class="removeAction">
                        <uv-icon name="close" color="#f48e4b" size="30" @click="removeItem(index)"></uv-icon>
                    </view>
                </view>
                <view class="item" v-if="totalWeight > 0">
                    <view class="itemName">
                        合计
                    </view>
                    <view class="itemWeight">
                        {{totalWeight}}
                    </view>
                    <view class="itemPercent">
                        100%
                    </view>
                    <view class="removeAction">
                        <uv-icon v-show="false" name="close" color="#f48e4b" size="30"
                            @click="removeItem(index)"></uv-icon>
                    </view>
                </view>
            </view>
        </view>
        <view class="addXiangFen" v-if="true">
            <view class="input">
                <view class="left">
                    <uv-input color="#1e90ff " border="none" v-model="xiangFangStore.waitAddXiangFenName"
                        placeholderStyle="font-size:30rpx" fontSize="40rpx" placeholder="请输入材料名"
                        customStyle="height:100rpx;padding-left:30rpx" inputAlign="center" maxlength="10"></uv-input>
                </view>
                <view class="right">
                    <uv-input color="#1e90ff" border="none" v-model="xiangFangStore.waitAddXiangFenWeight"
                        inputAlign="center" placeholderStyle="font-size:30rpx" fontSize="40rpx" placeholder="请输入材料重量"
                        type="digit" customStyle="height:100rpx" maxlength="6"></uv-input>
                </view>
            </view>
            <button class="addButton" @click="addItem">
                点&emsp;击&emsp;添&emsp;加
            </button>
        </view>
        <uv-toast ref="toastRef"></uv-toast>
    </view>

</template>

<script setup>
    import {
        isRef,
        isReactive,
        reactive,
        computed,
        ref,
        watch,
        toRefs,
        toRef,
        inject,
    } from 'vue'
    import {
        useXiangFangStore
    } from '@/stores/xiangFangStore';
    import {
        storeToRefs
    } from 'pinia';

    const itemNameLongClass = ref('itemNameLong') //
    const itemNameClass = ref('itemName')

    const xiangFangStore = useXiangFangStore();

    // 统一使用 store 中的香方数据
    let xiangFang = xiangFangStore.xiangFang;
    console.log("xiangFang:", xiangFang)

    let xiangFangName = ref("")
    if (xiangFang?.name) {
        xiangFangName.value = xiangFang.name.trim()
    }

    let xiangFangNameLength = ref(xiangFangName.value.length)

    let xiangFangUseFor = toRef(xiangFang, "useFor")
    let xiangFangCompose = toRef(xiangFang, "compose")


    // 香方当前总重量
    const totalWeight = computed(
        () => {
            if (!xiangFang || !xiangFang.compose || xiangFang.compose.length == 0) {
                return 0
            }
            let tmpTotal = xiangFang.compose.reduce(
                (prev, curr) => {
                    return prev + Number(curr.weight);
                }, 0
            )
            return Math.round(tmpTotal * 100) / 100;
        }
    )

    function removeItem(index) {
        xiangFang.compose.splice(index, 1)
    }

    function addItem() {
        if (xiangFangStore.waitAddXiangFenName == undefined || xiangFangStore.waitAddXiangFenName.trim().length == 0 ||
            xiangFangStore.waitAddXiangFenWeight == null) {
            openToast("材料名或材料重量不能为空")
            return
        }
        let weight = Number(xiangFangStore.waitAddXiangFenWeight)
        if (isNaN(weight) || weight <= 0) {
            openToast("材料重量不能小于或等于0")
            return
        }

        let com = {
            "name": xiangFangStore.waitAddXiangFenName,
            "weight": weight
        }
        if (!xiangFang.compose) {
            xiangFang.compose = []
        }
        xiangFang.compose.push(com)

        // 清空输入框
        xiangFangStore.waitAddXiangFenName = ""
        xiangFangStore.waitAddXiangFenWeight = null
        return
    }

    function toPercentage(numeratorStr, denominatorStr, decimalPlaces = 1) {
        if (numeratorStr === undefined || denominatorStr === undefined) {
            return
        }

        let numerator;
        let denominator;
        if (typeof numeratorStr !== 'number') {
            numerator = Number(numeratorStr)
        } else {
            numerator = numeratorStr
        }
        if (typeof denominatorStr !== 'number') {
            denominator = Number(denominatorStr)
        } else {
            denominator = denominatorStr
        }

        // 参数验证
        if (denominator === 0) {
            return
        }

        // 计算百分比
        const percentage = (numerator / denominator) * 100;

        // 格式化为指定小数位数
        const formattedPercentage = percentage.toFixed(decimalPlaces);

        return `${formattedPercentage}%`;
    }

    // // 2. 脚本中：声明与模板 ref 同名的变量（初始值为 null）
    const toastRef = ref(null);

    // 3. 调用 show 方法
    function openToast(message) {
        // 先判断组件已挂载（避免未初始化时调用报错）
        if (toastRef.value) {
            toastRef.value.show({
                type: 'default',
                icon: false,
                overlay: false,
                message: message
            }); // 等价于 Vue2 的 this.$refs.toast.show()
        }
    }
</script>

<style lang="scss" scoped>
    // 公共样式
    %center-flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    %title-text {
        font-size: 40rpx;
        letter-spacing: 5rpx;
        color: $shenZongSeWenBen;
    }

    %item-cell {
        width: 200rpx;
        @extend %center-flex;
        font-size: 40rpx;
        padding: 5rpx 15rpx;
        // border: 1rpx solid red;
    }

    .xiangFangName {
        margin: 30rpx 0;
        width: 700rpx;
        // border: 1rpx solid red;
        // height: 100rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        letter-spacing: 2rpx;
        font-size: 50rpx;
        font-weight: bold;
        border-radius: 20rpx;
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        color: $shenZongSeWenBen;

        .name {
            height: 120rpx;
            width: 100%;
            // border: 1rpx solid red;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 3rpx;
        }

        .useFor {
            height: 80rpx;
            width: 100%;
            // border: 1rpx solid blue;
            font-size: 25rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }

    .table {
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        margin: 50rpx 0 0 0;
        border-radius: 20rpx;
        width: 700rpx;
    }

    .title {
        @extend %center-flex;
        background-color: $qianHeSeBeiJing;
        border-width: 0 0 1rpx;
        border-style: solid;
        border-color: $qianHuiSeBianKuang;
        border-radius: 20rpx 20rpx 0 0;
        height: 100rpx;

        .name,
        .weight,
        .percent,
        .remove {
            flex-grow: 1;
            @extend %center-flex;

            text {
                @extend %title-text;
            }
        }

        .weight,
        .percent {
            border-width: 0 1rpx;
            border-style: solid;
            border-color: $qianHuiSeBianKuang;
        }
    }

    .itemDarkBack {
        background-color: rgba($qianHeSeBeiJing, 0.3);

    }

    .item {
        padding: 10rpx 0;

        @extend %center-flex;
        justify-content: space-between;

        // 添加hover效果
        &:hover {
            background-color: #FFE8A1;
        }



        .itemName,
        .itemWeight {
            @extend %item-cell;
        }

        .itemNameLong {
            @extend %item-cell;
            font-size: 25rpx;

        }

        .itemPercent {
            @extend %item-cell;
            color: $chengSeAnNiu;
        }

        .removeAction {
            @extend %item-cell;
            cursor: pointer;

            // 添加点击效果
            &:active {
                transform: scale(0.9);
            }
        }
    }

    .addXiangFen {
        width: 700rpx;
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        margin: 70rpx 0;
        border-radius: 20rpx;
    }

    .input {
        width: 700rpx;
        @extend %center-flex;
        justify-content: space-between;

        .left,
        .right {
            width: 300rpx;
        }
    }

    .addButton {
        height: 80rpx;
        @extend %center-flex;
        background-color: $qianHeSeBeiJing;
        border-radius: 0 0 20rpx 20rpx;
        color: $shenZongSeWenBen;
        font-size: 36rpx;
        letter-spacing: 5rpx;

        // 添加按钮交互效果
        &:active {
            background-color: darken($qianHeSeBeiJing, 10%);
        }
    }
</style>