<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import formComponent from './components/formComponent.vue';
</script>

<template>
  <section class="container">
    <div>
      <formComponent></formComponent>
    </div>
  </section>
</template>
<style>

.container{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>