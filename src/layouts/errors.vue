<!--
 * @Author: gq
 * @Date: 2022-02-21 16:09:45
 * @LastEditors: gq
 * @LastEditTime: 2022-02-21 16:11:05
 * @Description: file content
 * @FilePath: \vite-router\src\layouts\errors.vue
-->
<template>
  <div>
  errors
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  route: {
    meta: { auth: true },
  },
};
</script>