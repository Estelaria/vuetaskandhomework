<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>

<template>
  <main class="container">
    <div class="numbers">
      <h2>Counter</h2>
      <h2>{{ counterStore.count }}</h2>
      <h2>{{ counterStore.doubleCount }}</h2>
    </div>

    <button @click="counterStore.increment" class="add-button">Agregar valor</button>
  </main>
</template>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
}

.numbers {
  display: flex;
  flex-direction: column;
}

.add-button {
  background-color: #FCB6D4; 
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
