<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStudentsStore } from '@/stores/StudentsData';
import type { IStudent } from '@/stores/StudentsData';

const route = useRoute();
const studentsStore = useStudentsStore();

const studentId = parseInt(route.params.id as string, 10);
const student = ref<IStudent | null>(null);

onMounted(async () => {
    if (!isNaN(studentId)) {
        await studentsStore.GetStudent(studentId);
        student.value = studentsStore.student;
    }
});
</script>

<template>
    <div v-if="student" class="details-container">
        <h2>Detalles {{ student.name }}</h2>
        <p><strong>ID:</strong> {{ student.id }}</p>
        <p><strong>Nombre:</strong> {{ student.name }}</p>
        <p><strong>Email:</strong> {{ student.email }}</p>
        <p><strong>Grupo:</strong> {{ student.group }}</p>
        <RouterLink to="/studentlist" class="return-link">Regresar</RouterLink>
    </div>
    <div v-else>
        <p>Estudiante no encontrado. Vuelve a <RouterLink to="/studentlist" class="return-link">Lista de Estudiantes
            </RouterLink>.</p>
    </div>
</template>

<style scoped>
.details-container {
    background-color: #FCB6D4;
    padding: 20px;
    border-radius: 5px;
    color: white;
    text-align: left;
}

.return-link {
    float: right;
    background-color: #FF7EB9;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.return-link:hover {
    background-color: #FF93C4;
    
}
</style>
