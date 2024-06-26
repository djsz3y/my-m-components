<template>
  <div style="display: flex">
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province"
      style="margin: 0 10px"
      placeholder="请选择城市"
      v-model="city"
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province || !city"
      placeholder="请选择区域"
      v-model="area"
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import allAreas from "../lib/pca-code.json";

// 下拉框选择省份的值
let province = ref<string>("");
// 下拉框选择城市的值
let city = ref<string>("");
// 下拉框选择区域的值
let area = ref<string>("");
// 所有省市区数据
let areas = ref(allAreas);

// 城市下拉框的所有值
let selectCity = ref<any[]>([]);
// 城市、区域使用计算属性——不能使用 computed
// let selectCity = computed(() => {
//   if (!province.value) return [];
//   else {
//     // 拿到 省份值
//     let cities = areas.value.find(
//       (item) => item.code === province.value
//     )!.children;
//     return cities;
//   }
// });

// 区域下拉框的所有值
let selectArea = ref<any[]>([]);
// 城市、区域使用计算属性——不能使用 computed
// let selectArea = computed(() => {
//   if (!city.value) return [];
//   else {
//     // 拿到 省份值
//     let area = selectCity.value.find(
//       (item) => item.code === city.value
//     )!.children;
//     return area;
//   }
// });

// 监听选择省份
watch(
  () => province.value,
  (val) => {
    if (val) {
      let cities = areas.value.find(
        (item) => item.code === province.value
      )!.children;
      selectCity.value = cities;
    }
    city.value = "";
    area.value = "";
  }
);

// 监听选择城市
watch(
  () => city.value,
  (val) => {
    if (val) {
      let area = selectCity.value.find(
        (item) => item.code === city.value
      )!.children;
      selectArea.value = area;
    }
    area.value = "";
  }
);
</script>

<style scoped lang="scss"></style>
