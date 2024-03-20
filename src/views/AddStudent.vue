<template>
    <div>
        <h2>Agregar Estudiante</h2>
        <form @save="addStudent"></form>
        <RouterLink to="/studentlist" class="return-link">Regresar</RouterLink>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import form from '@/components/form.vue';
import { useStudentsStore } from '@/stores/StudentsData';
import type { IStudent } from '@/stores/StudentsData';

const router = useRouter();
const studentsStore = useStudentsStore();

function addStudent(studentData: IStudent) {
    studentsStore.CreateStudent(studentData);
    router.push({ name: 'StudentList' });
}
</script>

<style scoped>
.return-link {
    float: right;
    background-color: #FF7EB9;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}
</style>