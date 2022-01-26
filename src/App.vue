<!--
 * @Author: gq
 * @Date: 2022-01-23 19:57:41
 * @LastEditors: gq
 * @LastEditTime: 2022-01-24 23:17:33
 * @Description: file content
-->


<template>
  <div>
    
    <router-view></router-view>
  </div>
</template>
<script setup>
import {info,login} from '@/api/user';
// console.log(info());

info().then(res=>{
  console.log(res);
})

login().then(res=>{
  console.log(res);
})



</script>
<style>
</style>
