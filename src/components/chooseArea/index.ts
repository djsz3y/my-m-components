import { App } from "vue";
import chooseArea from "./src/index.vue";

// 让这个组件可以通过 use 的形式使用
// Vue.use(chooseArea) 的用法
// 1.要么是个函数，这个函数名字叫 install；
// 2.要么是一个对象，对象里又有一个 install 属性方法；
export default {
  // App 的类型通过 vue 的类型定义文件引入
  install(app: App) {
    // 还是通过 vue.component 注册一个全局组件，参数 组件名，组件对象。
    app.component("m-choose-area", chooseArea);
  },
};
