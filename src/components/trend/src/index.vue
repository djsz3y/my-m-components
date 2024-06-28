<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <!-- 2）插槽显示文字——利用 vue3 的 useSlot 的特性（小技巧） -->

      <!-- 【2】运用 useSlots() 的特性——命名插槽的名字，默认 default，所以这里是 slots.default -->
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <!-- 1）实现颜色反转 -->
      <!-- <el-icon-arrowup
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      ></el-icon-arrowup>
      <el-icon-arrowdown
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      ></el-icon-arrowdown> -->

      <!-- -------------- -->
      <!-- 【2】自定义图标——利用 Vue 提供的 component 属性，动态生成组件。 -->
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      ></component>
      <component
        :is="`el-icon-${toLine(downIcon)}`"
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      ></component>
      <!-- 1.图标选择器已经是全局组件，直接利用自己编写的组件，生成动态组件。

      2.vue3 的特性是组合式 API：

      - 很多组件，都是组合式使用；
      - 封装组件，其实是组合式地使用各种各样的组件；
      - 组合式的使用各种后续的、更复杂的组件；
      - 很多章节都有联系；

      3.趋势标记组件：
      ① 看似简单（展示出来就是一个文字加上一个图标）；
      ② 实际上增加很多自定义内容；
      ③ 编写组件过程中发现，思考的地方非常多：

      - 手敲
      - 学习讲解的如何设计组件，包括哪些地方该用什么特性，这些才是要学习的。 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from "vue";
import { toLine } from "../../../utils";
let props = defineProps({
  // 标记当前趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: "up",
  },

  // 【2】自定义图标——传入上升、下降趋势图标

  // 上升趋势显示的图标：
  upIcon: {
    type: String,
    default: "ArrowUp",
  },

  // 下降趋势显示的图标：
  downIcon: {
    type: String,
    default: "ArrowDown",
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

  // 实现计算属性的文字颜色：

  // 上升趋势文字颜色
  upTextColor: {
    type: String,
    default: "rgb(0, 0, 0)",
  },
  // 下降趋势文字颜色
  downTextColor: {
    type: String,
    default: "rgb(0, 0, 0)",
  },
});

// 2）插槽显示文字——利用 vue3 的 useSlot 的特性（小技巧）

// 【1】运用 useSlots() 的特性——定义
// 获取插槽内容
let slots = useSlots(); // 获取插槽内容
// console.log(slots);

// 文字颜色
let textColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor;
});
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
