<template>
    <div>
        <h2>{{ isEditing ? 'Edit Student' : 'Add Student' }}</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="student.name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="student.email" required>
            </div>
            <div>
                <label for="group">Group:</label>
                <input type="text" id="group" v-model="student.group" required>
            </div>
            <button type="submit">{{ isEditing ? 'Update' : 'Add' }}</button>
        </form>
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