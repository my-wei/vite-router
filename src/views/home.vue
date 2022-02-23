<!--
 * @Author: gq
 * @Date: 2022-01-23 19:57:41
 * @LastEditors: gq
<<<<<<< HEAD
 * @LastEditTime: 2022-02-19 11:36:05
=======
 * @LastEditTime: 2022-02-21 17:53:45
>>>>>>> 1cd841afef0d1f8a168e042d9e64cca48861d4a6
 * @Description: file content
-->
<template>
  <div class="bg-gray-50">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">欢迎</span>
        <span class="block text-indigo-600">Start your free trial today.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
<<<<<<< HEAD
          <router-link
            :to="{ name: 'admin.home' }"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >后台管理</router-link>
=======
          <router-link :to="{name:'admin.home'}" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> 后台管理 </router-link>
>>>>>>> 1cd841afef0d1f8a168e042d9e64cca48861d4a6
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <router-link
            :to="{ name: 'login' }"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >用户登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useCounterStore} from '@/store/counter'
export default {
  route: { name: "home" },
  setup(){
    const counter = useCounterStore();
    console.log(counter)
  }
};
</script>
