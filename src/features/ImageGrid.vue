<script setup>
import { computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => [
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1528629297340-d1d466945dc5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80',
    ],
  },
  rows: {
    type: Number,
    default: 4,
  },
  columns: {
    type: Number,
    default: 4,
  },
})

const visibleImages = computed(() => props.images.slice(0, props.columns * props.rows))
</script>

<template>
  <div class="image-grid" :style="{ gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))` }">
    <div v-for="(image, index) in visibleImages" :key="`${image}-${index}`" class="image-grid__item">
      <img :src="image" :alt="`Bike community photo ${index + 1}`" />
    </div>
  </div>
</template>

<style scoped>
.image-grid {
  display: grid;
  grid-auto-rows: minmax(120px, 1fr);
  gap: 0.85rem;
}

.image-grid__item {
  overflow: hidden;
  border-radius: 1rem;
  background: #e2e8f0;
  min-height: 120px;
  box-shadow: 0 18px 30px rgba(15, 23, 42, 0.08);
}

.image-grid__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.image-grid__item:hover img {
  transform: scale(1.04);
}

@media (max-width: 767px) {
  .image-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}
</style>
