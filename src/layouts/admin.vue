<!--
 * @Author: gq
 * @Date: 2022-01-23 19:57:41
 * @LastEditors: gq
 * @LastEditTime: 2022-02-06 01:13:04
 * @Description: file content
-->
<template>
    <div>
        <h2>admin.vue</h2>
        <router-view></router-view>
    </div>
</template>

<script >
export default {
    route: {
        meta: { auth: true }
    },
    mounted() {
        console.log(123)
    }
}
</script>