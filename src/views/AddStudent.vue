<template>
    <div>
        <h2>Agregar Estudiante</h2>
        <form @save="addStudent"></form>
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