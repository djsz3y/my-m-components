import { App } from "vue";
import chooseAreaCascader from "./src/index.vue";

export default {
  install(app: App) {
    app.component("m-choose-area-cascader", chooseAreaCascader);
  },
};
