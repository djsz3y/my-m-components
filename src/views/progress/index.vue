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
    ></m-progress>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
