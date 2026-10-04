<template>
  <div class="app-shell">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">{{ storeDetails.name }}</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="mainNav" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop">Shop</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item ms-lg-3">
              <router-link class="btn btn-primary rounded-pill px-3" to="/contact">Book a Ride</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="page-body">
      <router-view />
    </main>

    <SiteFooter
      :store-name="storeDetails.name"
      :tagline="storeDetails.tagline"
      :address="storeDetails.address"
      :phone="storeDetails.phone"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useShopStore } from './stores/shopStore'
import SiteFooter from './common/SiteFooter.vue'

const shopStore = useShopStore()
const { storeDetails } = storeToRefs(shopStore)
</script>
