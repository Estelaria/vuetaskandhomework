<template>
    <div class="home">
        <div class="left">
            <h2>{{ pageTitle }}</h2>
            <div>
                <p>Name</p>
                <p>Esmeralda Mendoza Jimenez</p>
            </div>
            <div>
                <p>Old</p>
                <p>24 Años</p>
            </div>
            <div>
                <p>Student</p>
                <p>Ing. en desarrollo y gestion de software</p>
            </div>
            <button @click="toggleImage">Mostrar Imagen</button>
        </div>
        <div class="right">
            <img v-if="showImage" src="@/assets/img/me.jpg" alt="Imagen" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    props: {
        pageTitle: String,
    },
    data() {
        return {
            showImage: false,
        };
    },
    methods: {
        toggleImage() {
            this.showImage = !this.showImage;
        },
    },
});
</script>

<style scoped>


.home {
    display: flex;
    justify-content: space-between;
}

.left {
    width: 70%;
    padding: 20px;
}

.right {
    width: 30%;
    padding: 20px;
}


p {
    color: #7D5A69;
}

button {
    background-color: #ff99cc;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 10px;
}

button:hover {
    background-color: #FCB6D4;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}</style>