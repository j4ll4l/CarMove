<script setup lang="ts">
interface Props {
  id?: number
  name?: string
  image?: string
  prix?: number
  info?: {
    km?: number
    annee?: number
    energie?: string
  }
}
const props = withDefaults(defineProps<Props>(), {
  name: 'Vehicule Name',
  image: '/vehicle_photo.jpg',
  prix: 20000,
  info: () => ({ km: 100000, annee: 2025, energie: 'Diesel' }),
})
</script>

<template>
  <div class="custom-card">
    <img :src="props.image" alt="..." class="custom-card-img" />
    <div class="custom-card-body">
      <h5 class="custom-card-title">{{ props.name }}</h5>
      <p class="custom-card-prix">{{ props.prix }}€</p>
      <p class="custom-card-info">
        <span>{{ props.info.km }}km</span>
        <span> {{ props.info.annee }}</span>
        <span> {{ props.info.energie }}</span>
      </p>
      <a href="#" class="custom-btn">Voir Plus</a>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  width: 18rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
}

.custom-card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.custom-card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.custom-card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
}

.custom-card-prix {
  margin: 0;
  color: #284cff;
  font-size: 1rem;
  font-weight: bold;
}
.custom-card-info {
  display: flex;
  gap: 1rem;
}

.custom-btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #284cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  transition: background 0.2s;
  cursor: pointer;
}

.custom-btn:hover {
  background: #1936b7;
}
</style>
