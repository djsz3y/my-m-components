<template>
  <div>
    <m-notification :value="50"></m-notification>
    <br />
    <br />
    <m-notification :value="50" :max="30"></m-notification>
    <br />
    <br />
    <m-notification :value="50" isDot></m-notification>
    <br />
    <br />
    <m-notification icon="ChatDotRound" :value="49"></m-notification>
    <br />
    <br />
    <m-notification :value="50">
      <template #default>
        <m-list
          @clickItem="clickItem"
          @clickAction="clickAction"
          :list="list"
          :actions="actions"
        ></m-list>
      </template>
    </m-notification>
    <br />
    <br />

    添加 disabled 属性：
    <m-notification :value="100" disabled>
      <template #default>
        <m-list
          @clickItem="clickItem"
          @clickAction="clickAction"
          :list="list"
          :actions="actions"
        ></m-list>
      </template>
    </m-notification>
  </div>
</template>

<script setup lang="ts">
import { list, actions } from './data.ts'
let clickItem = (val: any) => {
  console.log(val)
}
let clickAction = (val: any) => {
  console.log(val)
}
</script>

<style scoped lang="scss"></style>
