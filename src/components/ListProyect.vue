<template>
    <div>
        <table class="default">
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Completed</th>
                <th>Action</th>
            </tr>

            <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.Id }}</td>
                <td>{{ item.Title }}</td>
                <td>{{ item.Priority }}</td>
                <td><input type="checkbox" v-model="item.Completed" /></td>
                <td>
                    <button @click="eliminarProyecto(item)">Eliminar</button>
                    <button @click="editarProyecto(item)">Editar</button>
                </td>
            </tr>
        </table>
        <div v-if="showModal" class="modal-overlay">
            <div class="modal">
                <h2>Editar Proyecto</h2>
                <form @submit.prevent="confirmEdit">
                    <div class="form-group">
                        <label for="id">Id:</label>
                        <input type="text" id="id" name="id" v-model="editedProject.Id" required />
                    </div>
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input type="text" id="title" name="title" v-model="editedProject.Title" required />
                    </div>
                    <div class="form-group">
                        <label for="priority">Priority:</label>
                        <select id="priority" name="priority" v-model="editedProject.Priority" required>
                            <option value="Alta">Alta</option>
                            <option value="Media">Media</option>
                            <option value="Baja">Baja</option>
                        </select>
                    </div>
                    <button @click="cancelEdit">Cerrar</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
/*import Proyect from '../interfaces/interfaceProyect.ts';*/
import Proyect from '../interfaces/interfaceProyect.ts'

defineProps<{
    items: Proyect[],
}>()

const emits = defineEmits(['eliminar', 'editar']);

const showModal = ref(false);
const editedProject = ref<Proyect | null>(null);

const eliminarProyecto = (proyecto: Proyect) => {
    emits('eliminar', proyecto);
};

const editarProyecto = (proyecto: Proyect) => {
    editedProject.value = proyecto;
    showModal.value = true;
};

const confirmEdit = () => {
    if (editedProject.value) {
        emits('editar', editedProject.value);
        showModal.value = false;
        editedProject.value = null;
    }
};

const cancelEdit = () => {
    showModal.value = false;
    editedProject.value = null;
};
</script>

<style scoped>
/* Estilos para la tabla */
.default {
    width: 100%;
    border-collapse: collapse;
}

.default th,
.default td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
}

.default th {
    background-color: #f2f2f2;
}

.default tr:nth-child(even) {
    background-color: #f2f2f2;
}

.default tr:hover {
    background-color: #dddddd;
}

/* Estilos para el modal */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Fondo oscuro */
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    padding: 20px;
    border: 1px solid #ddd;
}
</style>
  