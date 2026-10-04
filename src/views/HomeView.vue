<template>
  <div>
    <HeroSection />

    <AboutSection  v-show="true" :store-name="storeDetails.name" />

    <VisitShopMap
      :store-name="storeDetails.name"
      :map-query="storeDetails.name + ' ' + storeDetails.address"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useShopStore } from '../stores/shopStore'
import HeroSection from '../features/HeroSection.vue'
import AboutSection from '../features/AboutSection.vue'
import VisitShopMap from '../features/VisitShopMap.vue'

const shopStore = useShopStore()
const { storeDetails } = storeToRefs(shopStore)
</script>
