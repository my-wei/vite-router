<template>
  <div class="m-3 grid grid-flow-col gap-2 justify-start">
    <a
      href=""
      v-for="(item, index) in links"
      :key="index"
      class="bg-white rounded-md py-2 px-2 text-sm text-gray-600"
    >
      {{ item.title }}
    </a>
  </div>
</template>
<script setup>
import { reactive } from "vue";
let links = reactive([
  {
    title: "编辑器",
  },
  {
    title: "订单列表",
  },
]);
</script>
