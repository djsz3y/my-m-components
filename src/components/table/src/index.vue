<template>
  <el-table :data="data">
    <template v-for="(item, index) in tableOptions" :key="index">
      <!-- 默认非插槽方式展示数据 -->
      <el-table-column
        v-if="!item.slot"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      ></el-table-column>
      <!-- 插槽方式展示数据 -->
      <el-table-column
        v-else
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <!-- 插槽方式自定义列 -->
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>

    <!-- 操作项是单独配置 -->
    <el-table-column
      :label="actionOptions!.label"
      :align="actionOptions!.align"
      :width="actionOptions!.width"
    >
      <!-- ele 自带 -->
      <template #default="scope">
        <!-- 作用域插槽 分发scope出去 -->
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
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

// 过滤操作选项之后的配置
let tableOptions = computed(() => props.options.filter((item) => !item.action))

// 找出操作项的配置
let actionOptions = computed(() => props.options.find((item) => item.action))
</script>
<style scoped lang="scss"></style>
