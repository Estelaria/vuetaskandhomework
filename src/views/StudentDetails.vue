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
    <div v-if="student">
        <h2>Detalles {{ student.name }}</h2>
        <p><strong>ID:</strong> {{ student.id }}</p>
        <p><strong>Nombre:</strong> {{ student.name }}</p>
        <p><strong>Email:</strong> {{ student.email }}</p>
        <p><strong>Grupo:</strong> {{ student.group }}</p>
        <RouterLink to="/studentlist">Regresar</RouterLink>
    </div>
    <div v-else>
        <p>Student not found. Return to <RouterLink to="/studentlist">Student List</RouterLink>.</p>
    </div>
</template>
