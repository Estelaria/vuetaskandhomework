<script setup lang="ts">
import { ref } from 'vue';
import ListProyect from './components/ListProyect.vue';
import NewProyect from './components/NewProyect.vue';
import Proyect from './interfaces/interfaceProyect.ts';

const listaProyectos = ref<Proyect[]>([
  { Id: 1243, Title: 'Proyecto 1', Priority: 'Medio', Completed: false },
  { Id: 1243, Title: 'Proyecto 2', Priority: 'Medio', Completed: false },
  { Id: 1243, Title: 'Proyecto 3', Priority: 'Medio', Completed: false },
  { Id: 1243, Title: 'Proyecto 4', Priority: 'Medio', Completed: false },
  { Id: 1243, Title: 'Proyecto 5', Priority: 'Medio', Completed: false },
]);



const agregarProyecto = (nuevoProyecto: Proyect) => {
  listaProyectos.value.push(nuevoProyecto);
  alert("Se ha creado")

};
const eliminarProyecto = (proyecto: Proyect) => {
  listaProyectos.value = listaProyectos.value.filter(p => p !== proyecto);
  alert("Se ha eliminado")
};

const editarProyecto = (proyecto: Proyect) => {

  alert(proyecto)
};

</script>

<template>
  <header>
    <div class="container">
      <NewProyect @nuevo-proyecto="agregarProyecto"/>
      <ListProyect :items="listaProyectos" @eliminar="eliminarProyecto"   @editar="editarProyecto"/>
    </div>
  </header>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
