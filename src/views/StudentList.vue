<script lang="ts">
import { useStudentsStore } from '@/stores/StudentsData';

export default {
    setup() {
        const studentsStore = useStudentsStore();
        studentsStore.GetStudents();

        const deleteStudent = (id: number) => {
            studentsStore.DeleteStudent(id);
        };

        return {
            students: studentsStore.students,
            deleteStudent
        };
    }
};
</script>
<template>
    <div>
        <h2>Lista de Estudiantes</h2>
        <ul>
            <li v-for="student in students" :key="student.id">
                <RouterLink :to="{ name: 'StudentDetails', params: { id: student.id } }">{{ student.name }}</RouterLink>
                <button @click="deleteStudent(student.id)">Delete</button>
            </li>
        </ul>

        <RouterLink to="/add">Nuevo Estudiante</RouterLink>
    </div>
</template>
