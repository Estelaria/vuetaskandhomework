<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <header class="navbar">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    
    <nav>
      <RouterLink to="/notFoundView" class="nav-link">Home</RouterLink>
      <RouterLink to="/studentlist" class="nav-link">Student List</RouterLink>
    </nav>
    
    <div class="icon-container">
      <router-link to="/profile">
        <i class="fas fa-user"></i>
      </router-link>
    </div>
  </header>

  <RouterView />
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #FCB6D4;
  color: white;
}

.logo {
  display: block;
  width: 50px;
  height: auto;
}

nav {
  display: flex;
}

.nav-link {
  margin-right: 20px;
  color: white;
  text-decoration: none;
}

.icon-container {
  display: flex;
  align-items: center;
}


@media (max-width: 768px) {
  .nav-link {
    margin-right: 10px;
  }
}
</style>
