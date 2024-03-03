<template>
  <div class="registration-container">
    <h2>Registro</h2>
    <form @submit.prevent="register" class="registration-form">
      <input type="text" v-model="form.name" placeholder="Nombre" required class="registration-input" />
      <input type="email" v-model="form.email" placeholder="Correo electrónico" required class="registration-input" />
      <input type="password" v-model="form.password" placeholder="Contraseña" required class="registration-input" />
      <button type="submit" class="registration-button">Registrarse</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RegistrationForm } from '@/types';

const registeredUsers = ref<RegistrationForm[]>([]);

const form = ref<RegistrationForm>({
  name: '',
  email: '',
  password: '',
});

const register = () => {
  if (registeredUsers.value.some(user => user.email === form.value.email)) {
    alert('El correo electrónico ya está registrado.');
    return;
  }

  registeredUsers.value.push(form.value);
  form.value = {
    name: '',
    email: '',
    password: '',
  };

  alert('Usuario registrado exitosamente.');
};
</script>


<style scoped>
.registration-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
}

.registration-form {
  display: flex;
  flex-direction: column;
}

.registration-input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.registration-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.registration-button:hover {
  background-color: #0056b3;
}
</style>
