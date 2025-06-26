<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <div id="logo"><h1>CarMove</h1></div>
      <div>
        <ul>
          <li>Accueil</li>
          <li>Véhicules</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: first baseline;
  background-color: #284cff;
  color: white;
  padding: 1rem 1.5rem;
  margin-bottom: 65vh;
}
ul {
  display: flex;
  gap: 1rem;
}
ul li {
  list-style: none;
}
</style>
