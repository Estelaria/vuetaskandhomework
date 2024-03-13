<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { onBeforeMount } from 'vue'
const firstName = ref('John')
const lastName = ref('Doe')

onBeforeMount(() => { })
onUnmounted(() => { })

const fullName = computed(() => firstName.value + ' ' + lastName.value)
</script>

<template>
    <main>
        <input type="text" v-model="fullName" />
        <input type="text" v-model="firstName" />
        <input type="text" v-model="lastName" />
        <div class="flex">
            {{ fullName }}
        </div>
    </main>
</template>
