import { App } from "vue";
import chooseTown from "./src/index.vue";

export default {
  install(app: App) {
    app.component("m-choose-town", chooseTown);
  },
};
