<template>
  <div>list</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ActionOptions, ListOptions } from './types';
let props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})
// 整体列表设计好了。
</script>

<style scoped></style>
