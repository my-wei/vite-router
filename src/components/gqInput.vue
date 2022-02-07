<!--
 * @Author: gq
 * @Date: 2022-02-02 15:58:44
 * @LastEditors: gq
 * @LastEditTime: 2022-02-02 15:59:32
 * @Description: file content
-->
<template>
  <input type="text" placeholder="请输入手机号或邮箱" class="gq-input" autocomplete='no'/>
</template>

<style lang="scss" scoped>
.gq-input {
  @apply border w-full rounded-sm
              py-1 px-2  outline-none
               border-gray-200
              mt-6
              focus:ring-2 ring-offset-2 ring-violet-600
              duration-300
              focus:border-white;
}
</style>
