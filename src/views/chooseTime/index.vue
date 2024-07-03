<template>
  <div>
    <m-choose-time
      :startOptions="startOptions"
      @startChange="startChange"
      @endChange="endChange"
    ></m-choose-time>
  </div>
</template>

<script setup lang="ts">
interface endValue {
  startTime: string;
  endTime: string;
}
let startChange = (val: string) => {
  console.log("startChange", val);
};
let endChange = (val: endValue) => {
  console.log("endChange", val);
};

// $attrs.startOptions 把剩余属性 封装进组件
let startOptions = {
  // size: "mini",
  // clearable: false,
};
</script>

<style scoped></style>
