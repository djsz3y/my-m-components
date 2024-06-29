<template>
  <el-badge style="cursor: pointer" :value="value" :max="max" :is-dot="isDot">
    <component :is="`el-icon-${toLine(icon)}`"></component>
  </el-badge>
</template>

<script setup lang="ts">
import { toLine } from "../../../utils";

let props = defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: "Bell",
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: "",
  },
  // 最大值
  max: {
    type: Number,
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
});

// 注入徽标属性
</script>

<style scoped lang="scss"></style>
