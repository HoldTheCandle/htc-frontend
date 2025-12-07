<template>
  <div class="login-container">
    <div class="login-card">
      <!-- LOGO -->
      <img class="logo" src="/logo.png" alt="HoldTheCandle" />

      <h2 class="title">Iniciar sesión</h2>

      <!-- EMAIL -->
      <div class="input-group">
        <label>Correo electrónico</label>
        <input
          v-model="email"
          type="email"
          placeholder="tu@email.com"
        />
      </div>

      <!-- PASSWORD -->
      <div class="input-group">
        <label>Contraseña</label>

        <div class="password-wrapper">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••"
          />
          <span class="toggle" @click="showPassword = !showPassword">
            <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
          </span>
        </div>
      </div>

      <!-- BUTTON -->
      <button
        class="btn-primary"
        :disabled="loading"
        @click="handleLogin"
      >
        <span v-if="loading">Entrando...</span>
        <span v-else>Entrar</span>
      </button>

      <!-- LINK DE CREAR CUENTA (inactivo por ahora) -->
      <p class="register-text">
        ¿No tienes cuenta todavía?
        <a href="#">Crear cuenta</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const loading = ref(false);

const userStore = useUserStore();
const router = useRouter();

const handleLogin = async () => {
  loading.value = true;

  const ok = await userStore.login(email.value, password.value);

  loading.value = false;

  if (ok) {
    console.log("LOGIN OK → usuario guardado:", userStore.user);

    // 🔥 IMPORTANTE: usar router.push, NO window.location.href
    router.push("/resumen");
  } else {
    alert("Credenciales incorrectas");
  }
};
</script>

<style scoped>
/* --- BACKGROUND --- */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f3f6fb;
}

/* --- CARD --- */
.login-card {
  background: white;
  padding: 40px 45px;
  width: 380px;
  border-radius: 18px;
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* --- LOGO --- */
.logo {
  width: 70px;
  margin-bottom: 15px;
}

/* --- TITULO --- */
.title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #111;
}

/* --- INPUTS --- */
.input-group {
  text-align: left;
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #444;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #d2d7df;
  font-size: 15px;
  transition: 0.2s;
}

.input-group input:focus {
  border-color: #1677ff;
  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.15);
  outline: none;
}

/* --- PASSWORD TOGGLE --- */
.password-wrapper {
  position: relative;
}

.password-wrapper input {
  width: 100%;
}

.toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
  font-size: 18px;
}

.toggle:hover {
  color: #111;
}

/* --- BUTTON --- */
.btn-primary {
  width: 100%;
  padding: 12px;
  background: #1677ff;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 10px;
}

.btn-primary:hover {
  background: #0e63d8;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* --- REGISTER LINK --- */
.register-text {
  margin-top: 20px;
  font-size: 14px;
}

.register-text a {
  color: #1677ff;
  text-decoration: none;
}
.register-text a:hover {
  text-decoration: underline;
}
</style>
