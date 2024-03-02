<template>
  <div class="navbar-container">
    <h1>{{ title }}</h1>
    <ul class="navbar">
      <li v-for="(item, index) in menuItems" :key="index">
        <template v-if="index % 2 === 0">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </template>
        <template v-else>
          {{ item.name }}
        </template>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'App',
  data() {
    return {
      title: 'Me',
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
.navbar-container {
  display: flex;
  align-items: center;
  background-color: #ff99cc; 
  padding: 10px;
}

h1 {
  margin: 0;
  color: white; 
  padding: 1rem;
}

.navbar {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar li {
  margin-right: 20px;
}

.navbar li:last-child {
  margin-right: 0;
}

.navbar a {
  text-decoration: none;
  color: white; 
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
