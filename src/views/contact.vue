<template>
    <div class="contact">
        <h2>{{ pageTitle }}</h2>
        <div class="contact-info">
            <div>
                <h3>Social Media</h3>
                <button @click="showEmail = true">Email</button>
                <button @click="openLinkedIn">LinkedIn</button>
            </div>
            <div v-if="showEmail">
                <p>21393097@utcancun.edu.mx</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Contact',
    props: {
        pageTitle: String,
    },
    data() {
        return {
            showEmail: false,
        };
    },
    methods: {
        openLinkedIn() {
            window.open('https://www.linkedin.com/');
        },
    },
};
</script>

<style scoped>
.contact {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.contact-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.contact-info div {
    text-align: center;
}

.contact-info button {
    margin-right: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #ff99cc;
    color: white;
    cursor: pointer;
}

.contact-info button:hover {
    background-color: #ff66b3;
}
</style>
