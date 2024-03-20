<template>
    <div class="student-list">
        <h2>Lista de Estudiantes</h2>
        <RouterLink to="/addStudent" class="add-button">Nuevo Estudiante</RouterLink>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in students" :key="student.id">
                    <td>{{ student.id }}</td>
                    <td>
                        <RouterLink :to="{ name: 'StudentDetails', params: { id: student.id } }" class="student-link">{{
                    student.name }}</RouterLink>
                    </td>
                    <td>
                        <button @click="deleteStudent(student.id)" class="delete-button">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { useStudentsStore } from '@/stores/StudentsData';

export default {
    setup() {
        const studentsStore = useStudentsStore();
        studentsStore.GetStudents();

        const deleteStudent = async (id: number) => {
            await studentsStore.DeleteStudent(id);
            alert('Estudiante eliminado con éxito');
        };

        return {
            students: studentsStore.students,
            deleteStudent
        };
    }
};
</script>

<style scoped>
.student-list {
    text-align: left;
    padding: 35px;
}

.student-link {
    color: #FCB6D4;
    text-decoration: none;
    margin-right: 10px;
    text-transform: capitalize;
}

.delete-button {
    background-color: #590232;
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

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #FCB6D4;
    color: white;
}
</style>