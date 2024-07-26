<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <m-modal-form title="编辑用户" width="50%" v-model:visible="visible">
      <template #footer>
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="visible = false">确认</el-button>
      </template>
    </m-modal-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 变量控制弹出框的显示与隐藏。
let visible = ref<boolean>(false);
let open = () => {
  visible.value = true;
};
</script>

<style scoped lang="scss"></style>
