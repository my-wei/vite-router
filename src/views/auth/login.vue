<!--
 * @Author: gq
 * @Date: 2022-02-02 13:13:49
 * @LastEditors: gq
 * @LastEditTime: 2022-02-06 01:22:32
 * @Description: file content
-->
<template>
  <!-- component -->
  <div
    class="font-mono bg-gray-400"
    style="
      height: 100vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
    "
  >
    <!-- Container -->
    <div class="container mx-auto">
      <div class="flex justify-center px-6">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style="
              background-image: url('https://source.unsplash.com/K4mSJ7kc0As/600x800');
            "
          ></div>
          <!-- Col -->
          <div
            class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none"
          >
            <h3 class="pt-4 text-2xl text-center">欢迎</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="username"
                  >账号</label
                >
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  autocomplete="off"
                  v-model="form.user"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                  >密码</label
                >
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  v-model="form.password"
                  autocomplete="off"
                />
                <p class="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div class="mb-4">
                <input
                  class="mr-2 leading-tight"
                  type="checkbox"
                  id="checkbox_id"
                />
                <label class="text-sm" for="checkbox_id">记住密码</label>
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  @click="submit"
                >
                  登录
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./register.html"
                  >注册账号</a
                >
              </div>
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./forgot-password.html"
                  >忘记密码?</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  route: {
    name: "login",
    meta: {
      auth: false,
    },
  },
};
</script>
<script setup>
import store from "@/utils/store";
import { reactive } from "vue";
import { login } from "@/api/user";
import { useRouter } from "vue-router";
// import { useRoute } from 'vue-router';
// console.log(useRoute().meta.auth = true);
const router = useRouter();

let form = reactive({
  user: "",
  password: "",
});
let submit = () => {
  login().then((res) => {
    store.set("token", {
      expire: 1000,
      token: res.data.token,
    });
    console.log(router);
    router.push({
      name: "admin",
      meta: {
        guest: true,
      },
    });
  });
};
</script>

<style lang="scss" scoped></style>
