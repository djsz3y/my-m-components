import { App } from "vue";
import chooseArea from "./chooseArea";
import chooseTown from "./chooseTown";
import chooseAreaCascader from "./chooseAreaCascader";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import notification from "./notification";
import list from "./list";
import menu from "./menu";
import progress from "./progress";
import chooseTime from "./chooseTime";
import chooseDate from "./chooseDate";

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
];

export default {
  install(app: App) {
    components.map((item) => {
      // item 是一个对象，对象里有一个 install 方法，
      // install 方法就是通过 app 注册的全局组件
      app.use(item);
    });
  },
};
