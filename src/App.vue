<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/Layout/TheHeader.vue'
import TheFooter from '@/components/Layout/TheFooter.vue'
import VehicleCard from '@/components/UI/VehicleCard.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
  <div class="app-layout">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  min-width: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  /* flex: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
