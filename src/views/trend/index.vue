<template>
  <div>
    1.实现基础的趋势标记：<br /><br />
    <!-- <div class="flex">
      <div><m-trend text="营业额"></m-trend></div>
      <div>
        <m-trend text="销售额" type="down"></m-trend>
      </div>
    </div>
    <br />
    <div class="flex">
      <div><m-trend text="营业额" upIconColor="blue"></m-trend></div>
      <div>
        <m-trend text="销售额" type="down" downIconColor="red"></m-trend>
      </div>
    </div> -->

    2.实现 slot 的 text：<br /><br />
    <!-- <m-trend>营业额</m-trend>
    <br />
    <m-trend text="销售业绩"></m-trend> -->

    3.实现颜色反转：<br /><br />
    <m-trend text="销售额" reverseColor></m-trend>
    <m-trend
      text="销售业绩"
      type="down"
      reverseColor
      downIconColor="yellow"
    ></m-trend>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
