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

// 接口表示省市区数据
export interface AreaItem {
  name: string;
  code: string;
  children?: AreaItem[];
}

export interface Data {
  name: string;
  code: string;
}

// 下拉框选择省份的值
let province = ref<string>("");
// 下拉框选择城市的值
let city = ref<string>("");
// 下拉框选择区域的值
let area = ref<string>("");
// 所有省市区数据
let areas = ref(allAreas);

// 城市下拉框的所有值
let selectCity = ref<AreaItem[]>([]);
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
let selectArea = ref<AreaItem[]>([]);
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

// 分发事件给父组件
let emits = defineEmits(["change"]); // 分发 change 事件给 父组件。

// 什么情况下分发change？那就是 省市区都有值的时候。
// 什么时候省市区一定有值？所以继续监听选择区域的值。

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
      let area = selectCity.value.find((item) => item.code === city.value)!
        .children!;
      selectArea.value = area;
    }
    area.value = "";
  }
);

// 监听选择区域
watch(
  () => area.value,
  (val) => {
    // 1.只有你在选择区之后，省市是一定保证它有值的。
    // console.log(province.value, city.value, val);

    // 2.这些值都有一些属性，所以在上面类型定义 interface Data。

    // 3.下面要根据需要拿到 name，name 同样要根据 code 做过滤。
    // - 必须要有 province.value city.value val 才能进行 find 操作，
    // - 因为不然重选省份的时候，city.value 会是空的，所以会报错
    // （必须有前面的值，才能进行后面的操作）。

    // 4.选完省市区后，又重新选省，也触发了 change 事件，
    // 所以要判断 val 是否有值，val 有值代表选择了三级省市区的区域，才触发 change 事件。

    if (val) {
      let provinceData: Data = {
        code: province.value,
        name:
          province.value &&
          allAreas.find((item) => item.code === province.value)!.name,
      };
      let cityData: Data = {
        code: city.value,
        name:
          city.value &&
          selectCity.value.find((item) => item.code === city.value)!.name,
      };
      let areaData: Data = {
        code: val,
        name: val && selectArea.value.find((item) => item.code === val)!.name,
      };
      console.log("拿到省市区数据：", provinceData, cityData, areaData);
      emits("change", {
        province: provinceData,
        city: cityData,
        area: areaData,
      });
    }
  }
);
</script>

<style scoped lang="scss"></style>
