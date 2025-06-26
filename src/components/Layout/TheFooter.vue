<script setup lang="ts"></script>

<template>
  <footer>
    <div id="terms">
      <p>Mentions Légales</p>
      <p>Politique de Confidentialité</p>
    </div>
    <div id="contact">
      <h6>Contactez-nous:</h6>
      <p><span>Email: </span>contact@carmove.fr</p>
      <p><span>Téléphone: </span>+33 1 23 45 67 89</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  color: white;
  background-color: #284cff;
}
#terms {
  display: flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
}
#contact p,
h6 {
  margin: 0;
  padding: 0;
}
</style>
