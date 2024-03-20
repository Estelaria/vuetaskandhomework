import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface ICounter {
  count: number
}
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)


  function increment() {
    count.value++
  }

  const doubleCount = computed(() => count.value * 2)

  return { count, doubleCount, increment }
})