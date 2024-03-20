<template>
    <div class="about-title">No se encuentra disponible</div>
    <router-link :to="{ name: 'home' }" class="login-link">Regresar</router-link>
</template>
<script lang="ts" setup></script>

<style scoped>
.about-title {
    color: #FCB6D4;
    margin-bottom: 20px;
}

.login-link {
    background-color: #FCB6D4;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.login-link:hover {
    background-color: #FF7EB9;
}
</style>