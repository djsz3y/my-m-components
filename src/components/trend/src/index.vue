<template>
  <div class="trend">
    <div class="text">
      <!-- 2）插槽显示文字——利用 vue3 的 useSlot 的特性（小技巧） -->

      <!-- 【2】运用 useSlots() 的特性——命名插槽的名字，默认 default，所以这里是 slots.default -->
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <!-- 1）实现颜色反转 -->
      <el-icon-arrowup
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      ></el-icon-arrowup>
      <el-icon-arrowdown
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      ></el-icon-arrowdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";
let props = defineProps({
  // 标记当前趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: "up",
  },
  // 趋势显示的文字
  // 1. 父组件传递过来的数据
  // 2. 插槽
  text: {
    type: String,
    default: "文字",
  },

  // 1）实现颜色反转

  // 颜色反转只在默认的颜色下生效 如果使用了自定义颜色 这个属性就不生效了
  reverseColor: {
    type: Boolean,
    default: false,
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: "#f5222d",
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: "#52c41a",
  },
});

// 2）插槽显示文字——利用 vue3 的 useSlot 的特性（小技巧）

// 【1】运用 useSlots() 的特性——定义
let slots = useSlots();
// console.log(slots);
</script>

<style scoped lang="scss">
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
