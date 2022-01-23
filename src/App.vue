<script setup>
console.log(import.meta.env)
</script>

<template>
  <div>
      <ul class="bg-red-50">
        <li>首页</li>
        <li>商品</li>
        <li>样式</li>
      </ul>
  
    <router-view></router-view>
  </div>
</template>

<style>
</style>
