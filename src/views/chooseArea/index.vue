<template>
  三级联动下拉框 Select<br /><br />
  <m-choose-area class="min-width-404" @change="changeArea"></m-choose-area>
  <br />
  <br />

  四级联动下拉框 Select<br /><br />
  <m-choose-town class="min-width-664" @change="changeTown"></m-choose-town>
  <br />
  <br />

  三级联动级联选择器 Cascader<br /><br />
  <m-choose-area-cascader
    class="min-width-292"
    @change="changeAreaCascader"
  ></m-choose-area-cascader>
</template>

<script setup lang="ts">
let changeArea = (val: any) => {
  console.log(val);
};
let changeTown = (val: any) => {
  console.log(val);
};
let changeAreaCascader = (val: any) => {
  console.log(val);
};
</script>

<style scoped lang="scss">
.min-width- {
  &404 {
    min-width: 404px;
    max-width: 404px;
  }
  &664 {
    min-width: 664px;
    max-width: 664px;
  }
  &292 {
    min-width: 292px;
    max-width: 292px;
  }
}
</style>
