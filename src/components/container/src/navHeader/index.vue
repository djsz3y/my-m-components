<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
let props = defineProps<{
  collapse: boolean;
}>();

// 1.（由于）需要修改父组件的数据
// - 父组件不能以这种方式传值：<nav-header :collapse="isCollapse"></nav-header>
// -    以及 toggle 函数里 isCollapse.value = !isCollapse.value; 这种方式修改数据
// - 而是要修改为以 v-model 方式传递的值：<nav-header v-model:collapse="isCollapse"></nav-header>

// 2.defineEmits 分发事件，
// - 固定格式：emit('update:xxx', value)，
// - 以达到修改数据的目的
let emits = defineEmits(["update:collapse"]);
const toggle = () => {
  // isCollapse.value = !isCollapse.value;
  emits("update:collapse", !props.collapse);
};
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
