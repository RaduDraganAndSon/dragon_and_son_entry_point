<template>
  <section class="section bg-light">
    <div class="container">
      <div class="row g-4 align-items-top">
        <div class="col-lg-6">
          <div class="about-socials mb-5">
            <SocialMediaLinks :limit="6" :show-all-button="true" />
          </div>
          <span class="section-label">About us</span>
          <h2 class="section-title">Your neighborhood bike repair cafe.</h2>
          <p class="lead-text">
            Hi, my name is Radu Dragan. Almost all the repairs here at {{ storeName }} cost only the price of the parts.
            <br>
            We understand how important having a means of transportation is for people who can't afford expensive
            repairs.
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
          <div class="image-grid-panel">
            <ImageGrid :rows="3" :columns="4" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ImageGrid from './ImageGrid.vue'
import SocialMediaLinks from './SocialMediaLinks.vue'

defineProps({
  storeName: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.about-socials {
  margin-top: 1.5rem;
}

.social-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(15, 23, 42, 0.7);
  margin-bottom: 0.65rem;
}

.about-socials :deep(.social-media-links) {
  margin-top: 0;
}

.about-socials :deep(.social-link) {
  background: rgba(15, 23, 42, 0.08);
  color: #0f172a;
}

.about-socials :deep(.social-link:hover),
.about-socials :deep(.social-link:focus) {
  background: rgba(15, 23, 42, 0.14);
  color: #0f172a;
}

.image-grid-panel {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 1.25rem;
  padding: 1rem;
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.08);
}
</style>
