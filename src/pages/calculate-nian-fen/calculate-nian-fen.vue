<template>
    <view class="container">
        <xiang-fang-detail class="xiangFangDetail" v-bind:xiangFang="xiangFang"></xiang-fang-detail>

        <view class='nianfenGroup'>
            <view class="nianfenInput">
                <view class="nianfenDesc">
                    粘粉比例
                </view>
                <view class="percent">
                    <uv-input color="#1e90ff" v-model="nianFenPercent" type="digit" inputAlign="center" border="none"
                        placeholder="请输入粘粉百分比" maxlength="6" fontSize="40rpx" customStyle="height:100rpx"
                        placeholderStyle="font-size:30rpx" @input="checkNum" @blur="checkNum"></uv-input>
                </view>
                <view class="iconPercent">
                    <text>%</text>
                </view>
            </view>
            <view>
                <button class="confirmButton" @click="addNianFen">确&emsp;&emsp;定</button>
            </view>
        </view>
        <save-xiang-fang></save-xiang-fang>
        <uv-toast ref="toastRef"></uv-toast>

    </view>
</template>

<script setup>
    import {
        nextTick
    } from 'process';
    import {
        reactive,
        ref
    } from 'vue';

    let xiangFang = reactive({
        "name": "鹅梨帐中香",
        "useFor": ['线香', '塔香', '合香珠'],
        "compose": [{
                "name": "檀香",
                "weight": "10"
            },
            {
                "name": "花蕊石",
                "weight": "20"
            },
            {
                "name": "沉香",
                "weight": "30"
            },
            {
                "name": "埃塞俄比亚乳粉",
                "weight": "50"
            },
            {
                "name": "松塔",
                "weight": "50"
            }
        ]
    })

    let nianFenPercent = ref(null)
    console.log("nianFenPercent out:", nianFenPercent)

    function addNianFen() {
        console.log("nianFenPercent:", nianFenPercent)
        if (nianFenPercent.value >= 100) {
            console.log("nian fen percent >= 100")
            return
        }
        if (!xiangFang.compose || xiangFang.compose.length == 0) {
            return 0
        }
        let tmpTotal = xiangFang.compose.reduce(
            (prev, curr) => {
                return prev + Number(curr.weight);
            }, 0
        )
        let allTotal = tmpTotal / (1 - nianFenPercent / 100)
        let nianFenWeight = allTotal - tmpTotal
        let z = {
            "name": "粘粉",
            "weight": nianFenWeight.toString()
        }
        console.log("z:", z)
        xiangFang.compose.push(z)
    }


    function checkNum(value) {
        if (value > 100) {
            openToast()
        } else {
            toastRef.value.hide()
        }
        console.log("checkNumInput:", value)
    }
    // // 2. 脚本中：声明与模板 ref 同名的变量（初始值为 null）
    const toastRef = ref(null);

    // 3. 调用 show 方法
    function openToast() {
        // 先判断组件已挂载（避免未初始化时调用报错）
        if (toastRef.value) {
            toastRef.value.show({
                type: 'default',
                icon: false,
                overlay: false,
                message: "粘粉所占比例不能超过100%"
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