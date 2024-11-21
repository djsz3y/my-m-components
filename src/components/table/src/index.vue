<template>
  <div>table components</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { TableOptions } from './types'

let props = defineProps({
  // 表格的配置
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
})
</script>
<style scoped lang="scss"></style>
