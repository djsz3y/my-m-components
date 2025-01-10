import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseTown from './chooseTown'
import chooseAreaCascader from './chooseAreaCascader'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import form from './form'
import modalForm from './modalForm'
import table from './table'

import './styles/base.scss'
import './styles/ui.scss'

import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'

const components = [
  chooseArea,
  chooseTown,
  chooseAreaCascader,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate,
  chooseCity,
  form,
  modalForm,
  table,
]

export default {
  install(app: App) {
    // 全局注册图标 牺牲一点性能
    // el-icon-xxx 驼峰命名法，用工具函数转换为 短横线命名法
    for (let i in Icons) {
      app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]) // 注册全局组件
    }
    components.map((item) => {
      // item 是一个对象，对象里有一个 install 方法，
      // install 方法就是通过 app 注册的全局组件
      app.use(item)
    })
  },
}
