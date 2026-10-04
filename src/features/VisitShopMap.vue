<template>
  <section class="section">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <iframe
            class="map-frame"
            :src="mapEmbedUrl"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="`Google map to ${storeName}`"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  storeName: {
    type: String,
    required: true,
  },
  mapQuery: {
    type: String,
    required: true,
  },
})

const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(props.mapQuery)}&output=embed`
</script>
