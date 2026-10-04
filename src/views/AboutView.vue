<template>
  <section class="section">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-lg-6">
          <span class="section-label">Who we are</span>
          <h1 class="section-title">Built by riders, for riders.</h1>
          <p class="lead-text">
            Since opening our doors, {{ storeDetails.name }} has helped cyclists of every level get more from every ride.
            We blend product expertise, technical shop knowledge, and local hospitality to create a store experience that feels personal.
          </p>
          <p class="lead-text">
            Our team believes the best bike is the one that matches your lifestyle, whether that means a daily commute,
            a mountain trail, or long weekend miles on scenic roads.
          </p>
        </div>
        <div class="col-lg-6">
          <div class="info-panel p-4 p-lg-5">
            <div class="row g-3">
              <div class="col-sm-6">
                <div class="service-item">
                  <h5>Community-first</h5>
                  <p class="mb-0 text-muted">Local rides, clinic events, and rider education.</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="service-item">
                  <h5>Certified experts</h5>
                  <p class="mb-0 text-muted">Technicians with hands-on bike service experience.</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="service-item">
                  <h5>High-performance</h5>
                  <p class="mb-0 text-muted">Top-tier bikes and components for every terrain.</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="service-item">
                  <h5>Trust & support</h5>
                  <p class="mb-0 text-muted">Friendly guidance before, during, and after purchase.</p>
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
import { storeToRefs } from 'pinia'
import { useShopStore } from '../stores/shopStore'

const shopStore = useShopStore()
const { storeDetails } = storeToRefs(shopStore)
</script>
