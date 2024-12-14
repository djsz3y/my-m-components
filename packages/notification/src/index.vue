<template>
  <el-popover
    placement="bottom"
    :width="300"
    trigger="click"
    :disabled="disabled"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge
        :style="[
          { cursor: !disabled ? 'pointer' : 'not-allowed' },
          { filter: !disabled ? 'none' : 'grayscale(100%)' },
        ]"
        :value="value"
        :max="max"
        :is-dot="isDot"
      >
        <component
          :is="`el-icon-${toLine(icon)}`"
          :style="{ 'not-allowed': disabled }"
        ></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { toLine } from "../../utils";

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
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
});

// 注入徽标属性
</script>

<style scoped lang="scss"></style>
