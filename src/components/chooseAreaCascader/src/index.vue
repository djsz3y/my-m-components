<template>
  <div style="display: flex">
    <el-cascader
      clearable
      style="width: 100%;"
      placeholder="请选择省/市/区"
      v-model="cascader"
      :options="areas"
      :props="cascaderProps"
    />
    <!-- @change="handleChange" -->
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import allAreas from "../lib/pca-code.json";
import { CascaderProps } from "element-plus";

export interface Data {
  name: string;
  code: string;
}

// 级联选择器的值
let cascader = ref();
let cascaderProps = ref<CascaderProps>({
  value: "code",
  label: "name",
  children: "children",
  expandTrigger: "hover" as const, // 次级菜单的展开方式——悬停展开
});
// 所有省市区数据
let areas = ref(allAreas);

// 分发事件给父组件
let emits = defineEmits(["change"]); // 分发 change 事件给 父组件。

// 监听级联选择器的值
watch(
  () => cascader.value,
  (val) => {
    // console.log("cascader:", val, val[0], val[1], val[2]);
    let province = val[0], // 省 code
      city = val[1], // 市 code
      area = val[2]; // 区 code

    let index_0 = allAreas.findIndex((item) => item.code === province); // 省份 index
    let provinceData = allAreas[index_0]; // 选择的 省份 code name children
    let selectCity = provinceData.children; // 省份下的城市列表

    let index_1 = selectCity.findIndex((item) => item.code === city); // 城市 index
    let cityData = selectCity[index_1]; // 选择的 城市 code name children
    let selectArea = cityData.children; // 城市下的区域列表

    let index_2 = selectArea.findIndex((item) => item.code === area); // 区域 index
    let areaData = selectArea[index_2]; // 选择的 区域 code name children

    let _provinceData: Data = {
      code: val[0],
      name: provinceData.name,
    };
    let _cityData: Data = {
      code: val[1],
      name: cityData.name,
    };
    let _areaData: Data = {
      code: val[2],
      name: areaData.name,
    };
    // console.log("拿到省市区数据：", provinceData, cityData, areaData);
    emits("change", {
      province: _provinceData,
      city: _cityData,
      area: _areaData,
    });
  }
);
</script>

<style scoped lang="scss"></style>
