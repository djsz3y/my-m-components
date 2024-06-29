<template>
  <div>
    <!-- <m-notification :value="50"></m-notification>
    <br />
    <br />
    <m-notification :value="50" :max="30"></m-notification>
    <br />
    <br />
    <m-notification :value="50" isDot></m-notification>
    <br />
    <br />
    <m-notification icon="ChatRound" :value="50"></m-notification> -->
    <m-notification :value="50">
      <template #default>
        <m-list></m-list>
      </template>
    </m-notification>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
