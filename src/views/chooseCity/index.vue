<template>
  <div>
    <m-choose-city @change="change"></m-choose-city>
  </div>
</template>

<script setup lang="ts">
let change = (val: any) => {
  console.log(val);
};
</script>

<style scoped></style>
