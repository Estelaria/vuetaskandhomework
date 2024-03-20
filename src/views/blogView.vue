<template>
    <section>
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                <RouterLink :to="{ name: 'post', params: { id: post.id } }">{{ index + 1 }} | {{ post.title }}
                </RouterLink>
            </li>
        </ul>
    </section>
</template>
<script lang="ts" setup>
import postService from '@/services/postService.ts'
import type { user } from '@/interfaces/userInterface.ts'
import type { Ref } from 'vue'
import { ref, onMounted } from 'vue'

const service = new postService()
const posts: Ref<IPost[]> = service.getPosts()

onMounted(async () => {
    await service.fetchAll()
})
</script>

<style scoped></style>