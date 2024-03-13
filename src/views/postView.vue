<template>
    <div>
        <h2><label>Titulo: </label>{{ post.title }}</h2>
        <h2><label>Cuerpo: </label>{{ post.body }}</h2>
        <h2><label>Numero: </label>{{ post.id }}</h2>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import PostService from '@/services/PostService'
import { onMounted, onBeforeMount } from 'vue'

const service = new PostService()
const post = service.getPost()

onMounted(async () => {
    const router = useRoute()
    const postId = router.params.id as string
    await service.fetchPost(postId)
})

</script>