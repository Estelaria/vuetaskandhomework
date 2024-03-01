<template>
    <div class="new-project">
        <h2>New Project</h2>

        <form @submit.prevent="crearProyecto">
            <div class="form-group">
                <label for="id">Id:</label>
                <input type="text" id="id" name="id" v-model="newProject.Id" required />
            </div>
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" v-model="newProject.Title" required />
            </div>
            <div class="form-group">
                <label for="priority">Priority:</label>
                <select id="priority" name="priority" v-model="newProject.Priority" required>
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>
                </select>
            </div>
            <input type="submit" value="Crear Proyecto" class="submit-btn" />
        </form>
    </div>
</template>
  
<script setup lang="ts">
import { defineEmits, ref } from 'vue';


const emits = defineEmits(['nuevo-proyecto']);

const newProject = ref({
    Id: null,
    Title: '',
    Priority: '',
    Completed: false,
});

const crearProyecto = () => {
    emits('nuevo-proyecto', newProject.value);
    newProject.value = {
        Id: null,
        Title: '',
        Priority: '',
        Completed: false,
    };
};
</script>
  
<style scoped>
.new-project {
    max-width: 400px;
    margin: auto;
}
</style>
