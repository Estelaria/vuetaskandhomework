<template>
    <div>
        <Form>
            <template #form>
            </template>
        </Form>
        <RouterLink to="/studentlist" class="return-link">Regresar</RouterLink>
    </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
import Form from '../components/form.vue';
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

</style>