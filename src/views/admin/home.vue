<!--
 * @Author: gq
 * @Date: 2022-02-07 12:05:25
 * @LastEditors: gq
 * @LastEditTime: 2022-02-21 17:44:47
 * @Description: file content
 * @FilePath: \vite-router\src\views\admin\home.vue
-->
<template>
  <div class="grid grid-flow-col gap-3">
    <el-card
      shadow="hover"
      :body-style="{ padding: '20px' }"
      v-for="n in 4"
      :key="n"
    >
      <template #header>
        用户数
        <el-tag type="danger" size="large" effect="dark">月</el-tag>
      </template>
      <section>
        1000

      </section>
    </el-card>
  </div>
</template>
<script >
export default {
  route: {
    meta: {
      guest: true,
    },
  },
  mounted(){
    console.log(useCounterStore());
  }
};
</script>


