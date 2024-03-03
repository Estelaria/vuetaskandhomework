<template>
    <div class="Container">
        <div class="Form" @input="validacion()">
            <form @submit.prevent="Login">
                <h1>Iniciar Sesión</h1>
                <input type="email" v-model="correo" placeholder="Correo" class="input-field">
                <input type="password" v-model="contraseña" placeholder="Contraseña" class="input-field">
                <button :disabled="habilitado" class="submit-button">Iniciar Sesión</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { User } from './interface/userInterface.ts'
import ObjectUser from './data/dataUser'
import { ref } from 'vue'


const correo = ref('')
const contraseña = ref('')
const habilitado = ref(true)

const Usuarios = ref<User[]>(ObjectUser);

const validacion = () => {
    if (correo.value.trim() != '' && contraseña.value.trim() != '') {
        habilitado.value = false
    } else {
        habilitado.value = true
    }
}

const Login = () => {

    if (Usuarios.value.some((user) => user.email === correo.value) && Usuarios.value.some((user) => user.password === contraseña.value)) {
        alert('Has Iniciado Sesion')
    } else {
        alert('No se encontró usuario')
    }

    correo.value = ''
    contraseña.value = ''
}



</script>

<style scoped>
.Container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.Form {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.submit-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #0056b3;
}

.submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>