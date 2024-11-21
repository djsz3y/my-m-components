<template>
  <m-table :data="tableData" :options="options"></m-table>
</template>

<script setup lang="ts">
import { TableOptions } from '../../components/table/src/types'

// 1.表格数据
const tableData = [
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
]

// 2.表格配置
const options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    // width: 180
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center',
  },
]
</script>

<style scoped lang="scss"></style>
