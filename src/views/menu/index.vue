<template>
  <div style="width: 200px">
    <m-menu
      :data="data1"
      defaultActive="1"
      router
      name="a"
      index="b"
      icon="c"
      children="d"
      @select="handleSelect1"
      @click="handleClick1"
    ></m-menu>

    <m-infinite-menu
      :data="data2"
      defaultActive="2"
      active-text-color="red"
      name="a"
      index="b"
      icon="c"
      children="d"
      @select="handleSelect2"
      @click="handleClick2"
    ></m-infinite-menu>
    <!-- defaultActive="3-1-1-1-1" -->
  </div>
</template>

<script setup lang="ts">
let data1 = [
  {
    a: "导航1",
    b: "1",
    c: "Document",
  },
  {
    a: "导航2",
    b: "2",
    c: "Document",
  },
  {
    a: "导航3",
    b: "3",
    c: "Document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "Document",
      },
    ],
  },
];
let data2 = [
  {
    a: "导航1",
    b: "1",
    c: "Document",
  },
  {
    a: "导航2",
    b: "2",
    c: "Document",
  },
  {
    a: "导航3",
    b: "3",
    c: "Document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "Document",
        d: [
          {
            a: "导航3-1-1",
            b: "3-1-1",
            c: "Document",
            d: [
              {
                a: "导航3-1-1-1",
                b: "3-1-1-1",
                c: "Document",
                d: [
                  {
                    a: "导航3-1-1-1-1",
                    b: "3-1-1-1-1",
                    c: "Document",
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

let handleSelect1 = (val: any) => {
  console.log("select", val);
};

let handleSelect2 = (val: any) => {
  console.log("select", val);
};

let handleClick1 = (val: any) => {
  console.log("click", val);
};

let handleClick2 = (val: any) => {
  console.log("click", val);
};
</script>

<style scoped lang="scss"></style>
