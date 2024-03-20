<template>
    <div class="form-container">
        <slot name="form"></slot>
        <div class="form-content">
            <h2>{{ isEditing ? 'Editar Estudiante' : 'Agregar Estudiante' }}</h2>
            <form @submit.prevent="submitForm" class="student-form">
                <div>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" v-model="student.name" required>
                </div>
                <div>
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" v-model="student.email" required>
                </div>
                <div>
                    <label for="group">Grupo:</label>
                    <input type="text" id="group" v-model="student.group" required>
                </div>
                <button type="submit">{{ isEditing ? 'Actualizar' : 'Agregar' }}</button>
                <RouterLink to="/studentlist" class="return-link">Regresar</RouterLink>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { useStudentsStore } from '@/stores/StudentsData';

export default {
    props: {
        studentId: {
            type: Number,
            default: null
        }
    },
    setup(props) {
        const studentsStore = useStudentsStore();
        const student = ref({
            id: null,
            name: '',
            email: '',
            group: ''
        });

        const isEditing = computed(() => props.studentId !== null);

        if (isEditing.value) {
            const existingStudent = studentsStore.students.find(s => s.id === props.studentId);
            if (existingStudent) {
                student.value = { ...existingStudent };
            }
        }

        const submitForm = () => {
            if (isEditing.value) {
                studentsStore.UpdateStudent(student.value);
            } else {
                studentsStore.CreateStudent(student.value);
            }
            student.value = { id: null, name: '', email: '', group: '' };
        };

        return { student, isEditing, submitForm };
    }
};
</script>

<style scoped>
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #FCB6D4;
}

.form-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.student-form {
    text-align: left;
}

.student-form div {
    margin-bottom: 10px;
}

.student-form label {
    font-weight: bold;
}

.student-form input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.student-form button {
    background-color: #FCB6D4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.student-form button:hover {
    background-color: #FF7EB9;
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
</style>