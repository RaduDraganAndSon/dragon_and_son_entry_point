<template>
  <section class="section bg-light">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-lg-6">
          <span class="section-label">About us</span>
          <h2 class="section-title">Your neighborhood bike specialists.</h2>
          <p class="lead-text">
            {{ storeName }} brings together performance design, local expertise, and a rider-first experience.
            Whether you need a commuter setup, mountain-ready trail bike, or a tune-up before your next ride,
            our team is here to help you move faster and ride more confidently.
          </p>
          <div class="row g-3 mt-2">
            <div class="col-sm-6">
              <div class="stat-box h-100">
                <strong class="d-block fs-3">12+</strong>
                <span>Years serving cyclists</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="stat-box h-100">
                <strong class="d-block fs-3">4.9/5</strong>
                <span>Average rider rating</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="info-panel p-4 p-lg-5">
            <div class="row g-4">
              <div class="col-md-6">
                <div class="feature-card h-100">
                  <h5>Custom fitting</h5>
                  <p class="mb-0 text-muted">We adjust saddle, reach, and frame geometry for comfort and power.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="feature-card h-100">
                  <h5>Bike maintenance</h5>
                  <p class="mb-0 text-muted">Tune-ups and repairs to keep every ride smooth and safe.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="feature-card h-100">
                  <h5>Premium gear</h5>
                  <p class="mb-0 text-muted">Helmets, lights, apparel, and accessories from trusted brands.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="feature-card h-100">
                  <h5>Guided advice</h5>
                  <p class="mb-0 text-muted">Helpful recommendations for every budget and riding style.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  storeName: {
    type: String,
    required: true,
  },
})
</script>
