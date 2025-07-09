<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VehicleCard from '@/components/UI/VehicleCard.vue'

const vehicles = ref()

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/vehicules')
    const data = await response.json()

    // Adaptation du format brut à celui utilisé par <VehicleCard />
    vehicles.value = data.map((vehicle: any) => ({
      id: vehicle.id,
      name: `${vehicle.model.brand.name} ${vehicle.model.name}`,
      image: '/vehicle_photo.jpg', // À adapter si une vraie image est disponible
      prix: 15000, // à adapter si tu as un champ prix
      info: {
        km: vehicle.milage.toLocaleString('fr-FR'),
        annee: new Date(vehicle.createdAt || Date.now()).getFullYear(),
        energie: 'Essence', // à adapter si l'API fournit ce champ
      },
    }))
  } catch (error) {
    console.error('Erreur lors du chargement des véhicules :', error)
  }
})
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
  padding: 1.5rem 0.5rem;
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
