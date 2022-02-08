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
        <el-tag type="danger" size="mini" effect="dark">月</el-tag>
      </template>
      <section>
        1000

      </section>
    </el-card>
  </div>
</template>
<script>
export default {
  route: {
    meta: {
      guest: true,
    },
  },
};
</script>
