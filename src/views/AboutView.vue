<template>
  <div class="about">
    <h1 class="about-title">Aqui puedes acceder al Log in</h1>
    <router-link to="/login" class="login-link">Iniciar sesión</router-link>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-title {
  color: #FCB6D4; /* Rosa */
  margin-bottom: 20px;
}

.login-link {
  background-color: #FCB6D4; 
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.login-link:hover {
  background-color: #FF7EB9; 
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
