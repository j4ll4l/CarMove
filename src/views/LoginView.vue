<script setup lang="ts">
import { ref, watch } from 'vue'

const email = ref('')
const password = ref('')
const error = ref('')
const emailInvalid = ref(false)
const passwordInvalid = ref(false)

function isValidEmail(val: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
}

function handleLogin() {
  emailInvalid.value = !email.value || !isValidEmail(email.value)
  passwordInvalid.value = !password.value

  if (emailInvalid.value || passwordInvalid.value) {
    error.value = 'Veuillez remplir tous les champs correctement.'
    return
  }
  error.value = ''
  alert(`Tentative de connexion avec :\nEmail : ${email.value}\nMot de passe : ${password.value}`)
}

watch(email, (val) => {
  emailInvalid.value = !val || !isValidEmail(val)
})
watch(password, (val) => {
  passwordInvalid.value = !val
})

// watch(email, (val) => {
//   if (val) emailInvalid.value = false
// })
// watch(password, (val) => {
//   if (val) passwordInvalid.value = false
// })
</script>

<template>
  <main>
    <div id="logo"><h1>CarMove</h1></div>
    <div class="custom-card login-card">
      <div class="custom-card-body">
        <h5 class="custom-card-title">Connexion</h5>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">Adresse e-mail</label>
            <input
              id="email"
              type="email"
              v-model="email"
              :class="['custom-input', { 'input-error': emailInvalid }]"
              placeholder="Entrez votre e-mail"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              v-model="password"
              :class="['custom-input', { 'input-error': passwordInvalid }]"
              placeholder="Entrez votre mot de passe"
              autocomplete="off"
            />
          </div>
          <p v-if="error" class="error-msg">{{ error }}</p>
          <button type="submit" class="custom-btn">Se connecter</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  background-color: #284cff;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
}
main h1 {
  color: white;
}
form {
  display: flex;
  flex-direction: column;
}
.login-card {
  width: 26rem;
  margin: 3rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
}

.custom-card-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.custom-card-title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.custom-input {
  padding: 0.5rem;
  border: 1px solid #284cff;
  border-radius: 1rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.custom-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #284cff;
  color: #fff;
  border: none;
  border-radius: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 1.5rem;
  align-self: center;
}

.custom-btn:hover {
  background: #1936b7;
}

.error-msg {
  color: #d32f2f;
  font-size: 0.95rem;
  margin: 0.5rem 0 0 0;
  text-align: center;
}
.input-error {
  border: 2px solid #d32f2f !important;
}
.custom-input:focus {
  outline: none;
  box-shadow: none;
}
</style>
