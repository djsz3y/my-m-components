import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import { toLine } from "./utils";

const app = createApp(App);

// 全局注册图标 牺牲一点性能
// el-icon-xxx 驼峰命名法，用工具函数转换为 短横线命名法
for(let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]) // 注册全局组件
}

app.use(router).use(ElementPlus);
app.mount("#app");
