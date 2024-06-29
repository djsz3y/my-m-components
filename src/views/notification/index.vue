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
    <m-notification icon="ChatRound" :value="50"></m-notification>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
