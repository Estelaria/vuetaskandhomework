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
    <div class="student-list">
        <h2>Lista de Estudiantes</h2>
        <ul>
            <li v-for="student in students" :key="student.id">
                <RouterLink :to="{ name: 'StudentDetails', params: { id: student.id } }" class="student-link">{{
                student.name }}</RouterLink>
                <button @click="deleteStudent(student.id)" class="delete-button">Eliminar</button>
            </li>
        </ul>

        <RouterLink to="/addStudent" class="add-button">Nuevo Estudiante</RouterLink>
    </div>
</template>

<style scoped>
.student-list {
    text-align: left;
    padding: 35px;
}

.student-link {
    color: #FCB6D4;
    text-decoration: none;
    margin-right: 10px;
}

.delete-button {
    background-color:#590232 ;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.add-button {
    float: right;
    background-color: #678C30;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.add-button:hover {
    background-color: #FF7EB9;
}
</style>
