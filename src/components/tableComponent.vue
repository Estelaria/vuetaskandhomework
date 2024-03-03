<template>
    <div class="Container">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in Usuarios" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td class="acciones">
                        <button class="editar">Editar</button>
                        <button class="eliminar">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import type { User } from '/interface/userInterface.ts';
import ObjectUser from '.../data/dataUser.ts';
import { ref } from 'vue'

const Usuarios = ref<User[]>(ObjectUser);

</script>

<style scoped>
.Container {
    max-width: 800px;
    margin: 0 auto;
}

.UserTable {
    width: 100%;
    border-collapse: collapse;
}

.UserTable th,
.UserTable td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    text-align: left;
}

.UserTable th {
    background-color: #f2f2f2;
}

.UserTable .acciones {
    display: flex;
}

.UserTable .acciones button {
    margin-right: 5px;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.UserTable .acciones .editar {
    background-color: #4caf50;
    color: white;
}

.UserTable .acciones .eliminar {
    background-color: #f44336;
    color: white;
}
</style>