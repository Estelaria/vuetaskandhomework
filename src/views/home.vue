<template>
    <div>
        <h2>{{ pageTitle }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    props: {
        pageTitle: String,
        message: String,
    }
});
</script>

<style scoped></style>
