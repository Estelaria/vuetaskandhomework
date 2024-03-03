<template>
    <div class="hobbies">
        <h2>{{ pageTitle }}</h2>
        <table class="hobbies-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(hobby, index) in hobbies" :key="index">
                    <td>{{ hobby.title }}</td>
                    <td><img :src="hobby.image" :alt="hobby.image" /></td>                </tr>
            </tbody>
        </table>
    </div>
</template>

<script  lang="ts">
export default {
    name: 'Hobbies',
    props: {
        pageTitle: String,
    },
    data() {
        return {
            hobbies: [
                { 
                    title: 'Mini house', 
                    image: 'src/assets/img/minihouse.jpg'
                },
                { 
                    title: 'Book', 
                    image: 'src/assets/img/book.jpg'
                },
                { 
                    title: 'Music Box', 
                    image: 'src/assets/img/tree.jpg' 
                },
                { 
                    title: 'Nail', 
                    image: 'src/assets/img/nails.jpg' },
            ],
        };
    },
};
</script>

<style scoped>
.hobbies {

    padding: 20px;
}

.hobbies h2 {
    color: white;
}

.hobbies-table {
    width: 100%;
    border-collapse: collapse;
}

.hobbies-table th,
.hobbies-table td {
    border: 1px solid #ffcccc;
    padding: 8px;
}

.hobbies-table th {
    background-color: #ff6699;
    color: white;
}

.hobbies-table tbody tr:nth-child(even) {
    background-color: #ffb3d9;
}

.hobbies-table tbody tr:hover {
    background-color: #ff66b3;
}

.hobbies-table img {
    max-width: 100px;
    height: auto;
}</style>
