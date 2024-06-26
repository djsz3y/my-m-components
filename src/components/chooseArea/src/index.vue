<template>
  <div style="display: flex">
    <el-select placeholder="请选择省份" v-model="provice">
      <el-option value="1">1</el-option>
    </el-select>
    <el-select style="margin: 0 10px" placeholder="请选择城市" v-model="city">
      <el-option value="1">1</el-option>
    </el-select>
    <el-select placeholder="请选择区域" v-model="area">
      <el-option value="1">1</el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import allArea from '../lib/pca-code.json';
console.log(allArea);

let provice = ref<string>("");
let city = ref<string>("");
let area = ref<string>("");
</script>

<style scoped lang="scss"></style>
