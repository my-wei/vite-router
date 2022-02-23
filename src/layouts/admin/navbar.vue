<!--
 * @Author: gq
 * @Date: 2022-02-16 22:37:56
 * @LastEditors: gq
 * @LastEditTime: 2022-02-17 00:01:45
 * @Description: file content
-->
<template>
  <div class="bg-white p-4 flex justify-between items-center">
    22333222
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex justify-center items-center relative group cursor-pointer">
      <img src="@/assets/logo.png" alt class="w-8 h-8 rounded-full object-cover" />
      <span class="ml-1 text-sm text-gray-600">hello</span>
      <section
        class="group-hover:block absolute top-full bg-white shadow-sm px-3 whitespace-nowrap border rounded-md hidden"
      >
        <div class="flex items-center cursor-pointer border-b py-3">
          <span class="text-xs text-gray-600 ml-2">文档资料</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-3">
          <span class="text-xs text-gray-600 ml-2">文档资料</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-3">
          <span class="text-xs text-gray-600 ml-2">文档资料</span>
        </div>
      </section>
    </div>
  </div>
</template>

