<template>
  <div>menu</div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { MenuItem } from "./types";

const props = defineProps({
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
});
console.log(props.data);
</script>

<style scoped lang="scss"></style>
