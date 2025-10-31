<script setup lang="ts">
    import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
    onLaunch(() => {
    });
    onShow(() => {
    });
    onHide(() => {
    });
</script>

<style>
    /* 统一设置所有平台的页面背景色和盒模型 */
    /*另一个常用深色背景色是#f5e6d3*/
page {
    background-color: $danYaSeBeiJing;
}

    /* 全局设置盒模型为border-box，包括所有元素 */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
</style>