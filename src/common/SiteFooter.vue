<template>
  <footer class="footer py-4 bg-dark text-white">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
      <div>
        <h5 class="mb-1">{{ storeName }}</h5>
        <small>{{ tagline }}</small>
      </div>
      <div class="text-md-end">
        <div>{{ address }}</div>
        <div>{{ phone }}</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
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
