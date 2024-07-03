<template>
  <div>
    <m-progress isAnimation :percentage="60"></m-progress>
    <m-progress type="circle" :percentage="60"></m-progress>
    <m-progress isAnimation type="circle" :percentage="60"></m-progress>
    <m-progress
      isAnimation
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
      @progressDone="progressDone"
    ></m-progress>
  </div>
</template>

<script setup lang="ts">
let progressDone = (val: any) => {
  console.log(val);
};
</script>

<style scoped></style>
