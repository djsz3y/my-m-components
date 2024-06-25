<template>
  <div>
    <!-- {{ visible }} -->
    <m-choose-icon title="选择图标" v-model:visible="visible">
      选择图标
    </m-choose-icon>
  </div>
</template>

<script setup lang="ts">
// 引入组件，后面注册为全局组件。
import mChooseIcon from "../../components/chooseIcon/src/index.vue";
import { ref } from "vue";

let visible = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>
