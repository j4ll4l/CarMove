<script setup lang="ts">
import { ref } from 'vue'
import VehicleCard from '@/components/UI/VehicleCard.vue'

const vehicles = ref([
  {
    id: 1,
    name: 'Peugeot 208',
    image: '/vehicle_photo.jpg',
    prix: 15000,
    info: { km: 45000, annee: 2021, energie: 'Essence' },
  },
  {
    id: 2,
    name: 'Renault Clio',
    image: '/vehicle_photo.jpg',
    prix: 13000,
    info: { km: 60000, annee: 2020, energie: 'Diesel' },
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    image: '/vehicle_photo.jpg',
    prix: 35000,
    info: { km: 20000, annee: 2023, energie: 'Électrique' },
  },
])
</script>

<template>
  <div class="main-content">
    <div class="select-row">
      <select class="custom-select">
        <option disabled selected>Marque</option>
        <option>Peugeout</option>
        <option>Renault</option>
        <option>Tesla</option>
      </select>
      <select class="custom-select">
        <option disabled selected>Prix</option>
        <option>5 000€</option>
        <option>10 000€</option>
        <option>15 000€</option>
      </select>
      <select class="custom-select">
        <option disabled selected>Carburant</option>
        <option>Gasoile</option>
        <option>Essence</option>
        <option>Electric</option>
        <option>Hybrid</option>
      </select>
    </div>
    <div class="vehicle-list">
      <VehicleCard v-for="vehicule in vehicles" :key="vehicule.id" v-bind="vehicule" />
    </div>
  </div>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
}
.vehicle-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes fixes */
  gap: 7rem; /* espace entre les cartes */
  justify-items: center;
}
.select-row {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
}

.custom-select {
  width: 120px;
  padding: 0.25rem 0.5rem;
  font-size: 0.95rem;
  border: 1px solid #284cff;
  border-radius: 0.25rem;
  background: #fff;
  color: #284cff;
  outline: none;
  transition: border 0.2s;
}

.custom-select:focus {
  border-color: #1936b7;
}
</style>
