<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import navComponent from './components/navComponent.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/whyUs">About</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/hobbies">Hobbies</RouterLink>
        <RouterLink to="contact">Contact</RouterLink>
        <RouterLink to="/work">Work</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
