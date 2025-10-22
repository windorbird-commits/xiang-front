<template>
    <view class="userLayout">
        <view class="userInfo">
            <image class="avatar" src="../../static/avatar-default.png" mode="aspectFill"></image>
            <view class="nickName">
                Tom
            </view>
        </view>
        <view class="section">
            <view class="list">
                <view class="row">
                    <view class="left">
                        <uv-icon name="folder" size="25" color="#b36b00"></uv-icon>
                        <view class="text">
                            我的香方
                        </view>

                    </view>
                    <view class="right">
                        <view class="text">
                            33
                        </view>
                        <uv-icon name="arrow-right" size="20" color="#aaa"></uv-icon>
                    </view>
                </view>
                <view class="row">
                    <view class="left">
                        <uv-icon name="star-fill" size="25" color="#b36b00"></uv-icon>
                        <view class="text">
                            我的收藏
                        </view>

                    </view>
                    <view class="right">
                        <view class="text">
                            33
                        </view>
                        <uv-icon name="arrow-right" size="20" color="#aaa"></uv-icon>
                    </view>
                </view>

            </view>
        </view>

    </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .userLayout {
        .userInfo {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 50rpx 0;

            .avatar {
                width: 260rpx;
                height: 260rpx;
                border-radius: 50%;
                // overflow: hidden;
                // border: 1rpx solid #666;
                box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.2);
            }

            .nickName {
                font-size: 50rpx;
                color: black;
                margin-top: 20rpx;

            }
        }

        .section {
            width: 700rpx;
            margin: 50rpx auto;
            border: 1px solid #eee;
            border-radius: 20rpx;
            box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.1);

            .list {
                .row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 30rpx;
                    height: 100rpx;
                    border-bottom: 1px solid #eee;

                    &:last-child {
                        border-bottom: 0;
                    }



                    .left {
                        display: flex;
                        align-items: center;

                        .text {
                            margin-left: 10rpx;
                            color: #666;
                        }

                    }

                    .right {
                        display: flex;
                        align-items: center;

                        .text {
                            font-size: 28rpx;
                            color: #aaa;
                        }
                    }
                }
            }
        }

        // border: 1rpx solid #666;
    }
</style>