<template>
  <section class="section">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-label">Shop</span>
        <h1 class="section-title">Find your next ride</h1>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-xl-4" v-for="bike in bikes" :key="bike.name">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body p-4">
              <span class="badge text-bg-primary rounded-pill mb-3">{{ bike.type }}</span>
              <h3 class="h4 mb-3">{{ bike.name }}</h3>
              <p class="text-muted mb-4">{{ bike.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <strong class="fs-5">{{ bike.price }}</strong>
                <button class="btn btn-primary rounded-pill">Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useBikeStore } from '../stores/bikeStore'

const bikeStore = useBikeStore()
const { bikes } = storeToRefs(bikeStore)
</script>
