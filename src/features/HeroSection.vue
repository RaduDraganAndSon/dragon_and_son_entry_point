<script setup>
import heroBackground from '../assets/hero-background.jpg'
</script>

<template>
  <section class="hero-video" :style="{ backgroundImage: `url(${heroBackground})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <span class="section-label text-white">[ Community bike repair café ] </span>
          <h1>Fix bikes, fuel community.</h1>
          <p class="mt-3">
            We work on old bike that need a bit of love.
          </p>
          <div class="d-flex flex-wrap gap-3 mt-4">
            <router-link class="btn btn-primary btn-lg rounded-pill px-4" to="/contact">Contact Us</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
