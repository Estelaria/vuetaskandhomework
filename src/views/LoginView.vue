<template>
    <div class="login-container">
        <form @submit.prevent="loginRequest" method="post" class="login-form">
            <input type="email" name="Email" v-model="inputEmail" id="email" placeholder="Correo electrónico" />
            <input type="password" name="Password" v-model="inputPass" id="password" placeholder="Contraseña" />
            <button type="submit" class="login-button">Iniciar sesión</button>
        </form>
        <p v-if="!error && errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-form {
    background-color: #FCB6D4;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.login-form input {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    border: none;
}

.login-button {
    background-color: #FCB6D4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-button:hover {
    background-color: #FF7EB9;
}

.error-message {
    color: red;
}
</style>


<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/User'
import router from '@/router/index'

const inputEmail = ref('')
const inputPass = ref('')
const userStore = useUserStore()
const errorMessage = ref<string>('')
const error = ref(false)

async function loginRequest() {
    if (inputEmail.value && inputPass.value) {
        error.value = await userStore.login(inputEmail.value, inputPass.value)
        if (error.value) {
            router.push({ name: 'dashboard', params: {} })
        } else {
            errorMessage.value = 'Inicio de sesión incorrecto'
        }
    } else {
        errorMessage.value = 'Por favor, introduce tu correo electrónico y contraseña.'
    }
}
</script>
