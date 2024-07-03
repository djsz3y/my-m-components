<template>
  <div>
    时间选择：<br /><br />
    <m-choose-time
      :startOptions="startOptions"
      @startChange="startChange"
      @endChange="endChange"
    ></m-choose-time>

    <br />
    <br />

    日期选择：<br /><br />
    <m-choose-date
      :disableToday="false"
      :startOptions="startOptions"
      @startChange="dateStartChange"
      @endChange="dateEndChange"
    ></m-choose-date>
  </div>
</template>

<script setup lang="ts">
interface endValue {
  startTime: string;
  endTime: string;
}
interface dateEndValue {
  startDate: Date;
  endDate: Date;
}
let startChange = (val: string) => {
  console.log("startChange", val);
};
let endChange = (val: endValue) => {
  console.log("endChange", val);
};

let dateStartChange = (val: Date) => {
  console.log("dateStartChange", val);
};
let dateEndChange = (val: dateEndValue) => {
  console.log("dateEndChange", val);
};

// $attrs.startOptions 把剩余属性 封装进组件
let startOptions = {
  // size: "mini",
  // clearable: false,
};
</script>

<style scoped></style>
