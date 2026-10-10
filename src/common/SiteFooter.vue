<template>
  <footer class="footer py-4 bg-dark text-white">
    <div class="container">
      <div class="row g-4 align-items-start">
        <div class="col-md-6">
          <h5 class="mb-1">{{ storeName }}</h5>
          <small>{{ tagline }}</small>
          <SocialMediaLinks :limit="4" :show-all-button="true" />
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <p>
            <i class="bi bi-geo-alt"></i> {{ address }}
            <br />
            <i class="bi bi-phone-vibrate"></i> {{ phone }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialMediaLinks from '../features/SocialMediaLinks.vue'

defineProps({
  storeName: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
})
</script>
