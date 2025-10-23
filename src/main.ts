import { createSSRApp } from "vue";
import App from "./App.vue";
import "./myStyle.scss";
export function createApp() {
    const app = createSSRApp(App);
    return {
        app,
    };
}