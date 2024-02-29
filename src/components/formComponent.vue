
<template>
<div id="app">
    <div>
      <form @submit.prevent="submitForm">
        <h2>Formulario de Registro</h2>
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" required>
        </div>
        <div>
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="apellido" required>
        </div>
        <div>
          <label for="edad">Edad:</label>
          <input type="number" id="edad" v-model.number="edad" required>
        </div>
        <div>
          <label for="genero">Género:</label>
          <select id="genero" v-model="genero" required>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
          <input type="text" v-if="genero === 'otro'" v-model="otroGenero" placeholder="Especificar">
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      nombre: '',
      apellido: '',
      edad: null as number | null,
      genero: '',
      otroGenero: ''
    };
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        alert('Formulario válido. Datos enviados.');
      } else {
        alert('Por favor, completa correctamente el formulario.');
      }
    },
    validateForm() {
      if (!this.edad || this.edad <= 0 || this.edad >= 60) {
        return false;
      }
      if (this.nombre.length < 2 || this.nombre.length > 18) {
        return false;
      }
      if (this.apellido.toLowerCase() === this.nombre.toLowerCase()) {
        return false;
      }
      if (this.genero === 'otro' && !this.otroGenero.trim()) {
        return false;
      }
      return true;
    }
  }
});
</script>

<style scoped>
form {
  max-width: 25rem;
  margin: 20px auto;
  padding: 20px;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
