<template>
  <div style="width: 200px">
    <!-- <m-menu :data="data1" defaultActive="1" router></m-menu> -->

    <m-infinite-menu
      :data="data2"
      defaultActive="2"
      active-text-color="red"
    ></m-infinite-menu>
    <!-- defaultActive="3-1-1-1-1" -->
  </div>
</template>

<script setup lang="ts">
let data1 = [
  {
    name: "导航1",
    index: "1",
    icon: "document",
  },
  {
    name: "导航2",
    index: "2",
    icon: "document",
  },
  {
    name: "导航3",
    index: "3",
    icon: "document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "document",
      },
    ],
  },
];
let data2 = [
  {
    name: "导航1",
    index: "1",
    icon: "document",
  },
  {
    name: "导航2",
    index: "2",
    icon: "document",
  },
  {
    name: "导航3",
    index: "3",
    icon: "document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "document",
        children: [
          {
            name: "导航3-1-1",
            index: "3-1-1",
            icon: "document",
            children: [
              {
                name: "导航3-1-1-1",
                index: "3-1-1-1",
                icon: "document",
                children: [
                  {
                    name: "导航3-1-1-1-1",
                    index: "3-1-1-1-1",
                    icon: "document",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
</script>

<style scoped lang="scss"></style>
