<template>
  <!-- <el-menu
    :collapse="collapse"
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon-menu />
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu />
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu />
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu> -->

  <m-menu
    :collapse="collapse"
    :data="data"
    router
    :defaultActive="$route.path"
  ></m-menu>
</template>

<script setup lang="ts">
let props = defineProps<{
  collapse: boolean;
}>();

let data = [
  {
    icon: "HomeFilled",
    name: "首页",
    index: "/",
  },
  {
    icon: "Check",
    name: "图标选择器",
    index: "/chooseIcon",
  },
  {
    icon: "Location",
    name: "省市区选择",
    index: "/chooseArea",
  },
  {
    icon: "Sort",
    name: "趋势标记",
    index: "/trend",
  },
  {
    icon: "Timer",
    name: "时间选择",
    index: "/chooseTime",
  },
  {
    icon: "Bell",
    name: "通知菜单",
    index: "/notification",
  },
  {
    icon: "Menu",
    name: "导航菜单",
    index: "/menu",
  },
  {
    icon: "TurnOff",
    name: "城市选择",
    index: "/chooseCity",
  },
  {
    icon: "DArrowRight",
    name: "进度条",
    index: "/progress",
  },
  {
    icon: "ScaleToOriginal",
    name: "日历",
    index: "/calendar",
  },
  {
    icon: "Setting",
    name: "表单",
    index: "/form",
  },
  {
    icon: "Setting",
    name: "弹出框表单",
    index: "/modalForm",
  },
  {
    icon: "ShoppingBag",
    name: "表格",
    index: "/table",
  },
];
</script>

<style scoped lang="scss"></style>
