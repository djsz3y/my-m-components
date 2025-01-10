import { createApp } from 'vue'
// import "./style.css";
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'
// import mUI from './components'

// 发布组件库【全量引入组件】
import djsz3yUI from '../lib'
import '../lib/style.css'
// 发布组件库【按需引入组件】
// import chooseIcon from '../lib/chooseIcon/index.mjs'
// import '../lib/chooseIcon/style.css'

const app = createApp(App)

// 全局注册图标 牺牲一点性能
// el-icon-xxx 驼峰命名法，用工具函数转换为 短横线命名法
for (let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]) // 注册全局组件
}

app
  .use(router)
  .use(ElementPlus)
  // .use(mUI)

  // 引入发布的组件
  .use(djsz3yUI)
// .use(chooseIcon)

// 单独使用某一个组件，类似于使用每一个组件下的 index.ts 文件。
// 之前已经把组件的注册设计好了。
app.mount('#app')
