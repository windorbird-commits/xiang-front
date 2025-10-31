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
        reactive,
        ref,
        isRef,
        isReactive,
        provide
    } from 'vue';
    import {
        useCalculateNianFenStore
    } from '@/stores/calculateNianFenStore';
    import {
        storeToRefs
    } from 'pinia';

    const calculateNianFenStore = useCalculateNianFenStore();
    const xiangFangDetailRef = ref(null);
    const xiangFang = calculateNianFenStore.xiangFang; // 读取整体是响应式的

    // 修改后的函数，使用 store 中的数据
    function addNianFen() {

        if (!xiangFang.compose || xiangFang.compose.length <= 0 || xiangFang.compose.length > 30) {
            console.log("材料不能为空或超过30个材料")
            return
        }

        // 仅允许添加一个带管理员标识的粘粉
        let adminAddedNianFen = xiangFang.compose.filter((item) => {
            return item.isAdminAddedNianFen
        })
        if (adminAddedNianFen.length > 0) {
            openToast("已经添加了粘粉了")
            return
        }




        const nianFenPercent = calculateNianFenStore.nianFenPercent;

        // 检查输入是否有效
        // 去除可能的空格
        const trimmedNianFenPercent = nianFenPercent ? nianFenPercent.toString().trim() : "";
        if (!trimmedNianFenPercent || trimmedNianFenPercent === "" || isNaN(trimmedNianFenPercent)) {
            console.log("粘粉比例不能为空或不是数字")
            return
        }

        // 转换为数字
        const percent = Number(trimmedNianFenPercent)

        if (!checkNum(percent)) {
            return
        }


        let tmpTotal = xiangFang.compose.reduce(
            (prev, curr) => {
                return prev + Number(curr.weight);
            }, 0
        )

        let allTotal = tmpTotal / (1 - percent / 100)
        let nianFenWeight = allTotal - tmpTotal


        let tmp = {
            "name": "粘粉",
            "weight": Math.round(nianFenWeight * 100) / 100, // 保留两位小数
            "isAdminAddedNianFen": true,
        }

        // 修改 store 中的数据
        xiangFang.compose.push(tmp)
        calculateNianFenStore.nianFenPercent = null
    }


    function checkNum(value) {
        // 确保值是数字类型
        const numValue = Number(value)

        if (!isNaN(numValue) && (numValue >= 100) || numValue <= 0) {
            openToast("粘粉所占比例应在1~99之间")
            return false
        } else {
            toastRef.value.hide()
        }
        return true
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
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .xiangFangDetail {
        width: 700rpx
    }

    .addXiangFen {
        width: 700rpx;
    }

    .nianfenGroup {
        /* margin: 70rpx 0; */
        box-shadow: 2px 3px 5px 5px $biaoZhunYinYing;
        border-radius: 20rpx;
        margin: 0 0 70rpx 0;


        .confirmButton {
            display: flex;
            align-items: center;
            justify-content: center;
            /* border: 1rpx solid red; */
            width: 100%;
            height: 80rpx;
            background-color: $qianHeSeBeiJing;
            border-radius: 0 0 20rpx 20rpx;
        }
    }


    .nianfenInput {
        width: 700rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* border: 1rpx solid red; */

        .nianfenDesc {
            /* border: 1rpx solid black; */
            height: 80rpx;
            width: 300rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 20rpx;
        }

        .percent {
            /* border: 1rpx solid blue; */
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