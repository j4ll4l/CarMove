<script setup lang="ts"></script>

<template>
  <div class="custom-card">
    <img src="/vehicle_photo.jpg" alt="..." class="custom-card-img" />
    <div class="custom-card-body">
      <h5 class="custom-card-title">Vehicle Name</h5>
      <p class="custom-card-prix">20 000€</p>
      <p class="custom-card-info"><span>50 000km</span><span> 2025</span><span> Diesel</span></p>
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
  color: blue;
  font-size: 1rem;
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
