<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <div id="logo"><h1>CarMove</h1></div>
      <div>
        <ul>
          <li><RouterLink :to="`/`">Accueil</RouterLink></li>
          <li>
            <RouterLink :to="`/list`">Véhicules</RouterLink>
          </li>
          <li><a href="">Contact</a></li>
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
  padding-bottom: 1.5rem;
}
ul {
  display: flex;
  gap: 1rem;
}
ul li {
  list-style: none;
}
ul li a {
  text-decoration: none;
  color: inherit;
}
</style>
