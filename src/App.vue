<!-- App.vue -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <template v-if="index % 2 === 0">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </template>
        <template v-else>
          {{ item.name }}
        </template>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'App',
  data() {
    return {
      title: 'Menu',
      menuItems: [
        { name: 'Home', path: '/home' },
        { name: 'Profile', path: '/profile' },
        { name: 'Hobbies', path: '/hobbies' },
        { name: 'WhyUs', path: '/whyUs' },
        { name: 'Contact', path: '/contact' },
        { name: 'Work', path: '/work' },

      ],
    };
  },
});
</script>
<style scoped>
.container {
  display: flex;
  padding: 1rem;
  border: 1rem;
  margin-right: 1rem;
}
</style>
