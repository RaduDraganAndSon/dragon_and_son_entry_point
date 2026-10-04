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
const bikes = [
  {
    name: 'Summit XR',
    type: 'Mountain',
    description: 'Responsive trail geometry, carbon fork, and reliable all-terrain control.',
    price: '$2,499',
  },
  {
    name: 'Metro City',
    type: 'Commuter',
    description: 'Built for everyday city rides with comfort-focused geometry and integrated lights.',
    price: '$1,399',
  },
  {
    name: 'Aero One',
    type: 'Road',
    description: 'A lightweight performance bike for faster climbs, longer miles, and smoother speed.',
    price: '$2,899',
  },
  {
    name: 'Trail Lite',
    type: 'Hybrid',
    description: 'A versatile everyday option designed to balance speed, comfort, and stability.',
    price: '$1,149',
  },
  {
    name: 'Urban Plus',
    type: 'E-Bike',
    description: 'Power-assisted mobility for work commutes, errands, and long scenic rides.',
    price: '$2,199',
  },
  {
    name: 'Cinder Pro',
    type: 'Gravel',
    description: 'A durable all-road platform for rough pavement, dirt tracks, and adventure routes.',
    price: '$1,799',
  },
]
</script>
