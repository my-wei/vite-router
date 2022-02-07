<template>
  <div>
    123
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
