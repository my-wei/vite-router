<!--
 * @Author: gq
 * @Date: 2022-01-23 19:57:41
 * @LastEditors: gq
 * @LastEditTime: 2022-01-24 23:17:33
 * @Description: file content
-->


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
<script setup>
import helper from "@/types/helper";
import {info} from '@/api/user';
// console.log(info());

info().then(res=>{
  console.log(res);
})




</script>
<style>
</style>
