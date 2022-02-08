<!--
 * @Author: gq
 * @Date: 2022-01-23 19:57:41
 * @LastEditors: gq
 * @LastEditTime: 2022-02-06 01:13:04
 * @Description: file content
-->
<template>
  <div>
    <div class="admin h-screen w-screen flex">
      <div class="menu w-[200px] bg-gray-800 p-4">
        <div class="logo text-gray-300 flex items-center">
          <i class="text-fuchsia-300 mr-2 text-[25px] iconfont icon-baobei"></i>
          <span class="text-md">title</span>
        </div>
        <MenuComponent />
      </div>
      <div class="content flex-1 bg-gray-100">
        <NavbarComponent />
        <HistoryLink />
        <div class="m-3 p-5 bg-white">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MenuComponent from "./admin/menu.vue";
import NavbarComponent from "./admin/navbar.vue";
import HistoryLink from "./admin/historyLink.vue";
</script>
<script>
export default {
  route: {
    name: "admin",
    meta: { guest: true },
    redirect:"/admin/home"
  },
};
</script>

<style lang="scss" scoped>
.admin {
}
</style>
