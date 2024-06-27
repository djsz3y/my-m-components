<template>
  <!-- 三级联动 下拉框 Select -->
  <m-choose-area class="width-404" @change="changeArea"></m-choose-area>
  <br />
  <br />

  <!-- 四级联动 下拉框 Select -->
  <m-choose-town class="width-664" @change="changeTown"></m-choose-town>
  <br />
  <br />

  <!-- 三级联动 级联选择器 Cascader -->
  <!-- <m-choose-area-cascader @change="changeAreaCascader"></m-choose-area-cascader> -->
</template>

<script setup lang="ts">
let changeArea = (val: any) => {
  console.log(val);
};
let changeTown = (val: any) => {
  console.log(val);
};
// let changeAreaCascader = (val: any) => {
//   console.log(val);
// };
</script>

<style scoped lang="scss">
.width- {
  &404 {
    min-width: 404px;
    max-width: 404px;
  }
  &664 {
    min-width: 664px;
    max-width: 664px;
  }
}
</style>
