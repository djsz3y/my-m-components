<template>
  <el-dialog v-model="dialogVisible" v-bind="$attrs">
    <template #default>表单</template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

let emits = defineEmits(["update:visible"]);

// 弹出框的显示与隐藏
let dialogVisible = ref<boolean>(props.visible);

// 通过两次监听，反复修改父组件的值；

// 第一、监听 props.visible
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);

// 第二、监听 dialogVisible.value
watch(
  () => dialogVisible.value,
  (val) => {
    // 打印出来 val ，此时，打开是 true，关闭时 false；
    // - 点开，第一次是 true，
    // - 关闭，是 false 打不开；
    console.log(val);
    // - 但是，父组件的 visible 并没有改（views 里没有把值传过来）。

    // - 所以，需要通过分发事件 emits 的方式，改变父组件的值，控制弹出框的显示与隐藏。
    emits("update:visible", val);
  }
);
</script>

<style scoped lang="scss"></style>
