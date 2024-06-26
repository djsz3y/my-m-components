<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<script setup lang="ts">
import mChooseArea from "../../components/chooseArea/src/index.vue";
let changeArea = (val: any) => {
  console.log(val);
};
</script>

<style scoped lang="scss"></style>
