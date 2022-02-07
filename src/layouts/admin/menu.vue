<template>
  <div class="left-container">
    <dl v-for="(item, index) in menus" :key="index">
      <dt @click="handle(item, index)">
        <section>
          <i class="mr-2 iconfont" :class="item.icon"></i>
          <span class="text-sm">{{ item.title }}</span>
        </section>
        <section>
          <i class="iconfont icon-jiantouxia"></i>
        </section>
      </dt>
      <dd
        v-show="item.active"
        :class="childrenItem.active ? 'active' : ''"
        v-for="(childrenItem, childernIndex) in item.children"
        :key="childrenItem + childernIndex"
      >
        {{ childrenItem.title }}
      </dd>
    </dl>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const menus = reactive([
  {
    title: "错误页面",
    icon: "icon-cuowu",
    active: true,
    children: [
      {
        title: "404页面",
        active: true,
      },
      {
        title: "403页面",
      },
    ],
  },
  {
    title: "编辑器",
    children: [{ title: "markend编辑器" }, { title: "富文本编辑器" }],
  },
]);
let resetMenus = (i) => {
  menus.forEach((menu, index) => {
    if (i != index) {
      menu.active = false;
      menu.children?.forEach((item) => (item.active = false));
    }
  });
};
let handle = (pmenu, index) => {
  resetMenus(index);
  pmenu.active = !pmenu.active;
};
</script>
<style lang="scss" scoped>
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-sm mt-6 flex justify-between cursor-pointer;
        section {
          @apply flex items-center;
          i {
            @apply mr-2 text-sm;
          }
        }
      }
      dd {
        @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500;
    
        &.active {
          @apply hover:bg-violet-500 bg-violet-700;
        }
      }
    }
  }
</style>
