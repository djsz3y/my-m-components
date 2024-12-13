<template>
  <m-table
    :data="tableData"
    :options="options"
    elementLoadingText="加载中..."
    elementLoadingBackground="rgba(0, 0, 0, .8)"
    :elementLoadingSvg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    @confirm="confirm"
    @cancel="cancel"
  >
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      {{ scope.row.date }}
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top" width="auto">
        <template #default>
          <div>姓名：{{ scope.row.name }}</div>
          <div>住址：{{ scope.row.address }}</div>
        </template>
        <template #reference>
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-popover>
    </template>
    <template #action="{ scope }">
      <el-button size="small" type="primary" @click="edit(scope)"
        >编辑</el-button
      >
      <el-button size="small" type="danger">删除</el-button>
    </template>
    <!-- <template #editCell="{ scope }">
      <div style="display: flex">
        <el-button size="small" type="primary">确认</el-button>
        <el-button size="small">取消</el-button>
      </div>
    </template> -->
  </m-table>
</template>

<script setup lang="ts">
import { TableOptions } from '../../components/table/src/types'
import { ref } from 'vue'

interface TableData {
  date: string
  name: string
  address: string
}

// 1.改造表格数据 3s 后再有
let tableData = ref<TableData[]>([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
// setTimeout(() => {
//   tableData.value =
// }, 3000)

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

// 2.表格配置
const options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date',
    editable: true,
    // width: 180
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    slot: 'name',
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center',
    editable: true,
  },
  // 使用 computed 计算属性把操作选项过滤出来。
  {
    label: '操作',
    align: 'center',
    action: true,
  },
]

// 点击编辑
let edit = (scope: any) => {
  // console.log(scope)
}

// 点击勾
let confirm = (scope: any) => {
  // console.log('父组件', scope)
}

// 点击叉
let cancel = (scope: any) => {
  // console.log('父组件', scope)
}
</script>

<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
}
</style>
