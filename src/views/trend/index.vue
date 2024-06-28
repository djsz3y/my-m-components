<template>
  <div>
    <div class="flex">
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
    </div>
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
