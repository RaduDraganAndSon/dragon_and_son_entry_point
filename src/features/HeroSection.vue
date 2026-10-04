<template>
  <section class="hero-video">
    <video autoplay muted loop playsinline>
      <source src="https://videos.pexels.com/video-files/813134/813134-hd_1920_1080.mp4" type="video/mp4" />
    </video>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <span class="section-label text-white">Built for the road ahead</span>
          <h1>Ride stronger. Ride smarter.</h1>
          <p class="mt-3">
            Premium bikes, custom fitting, and expert repairs for commuters, racers, and weekend explorers.
          </p>
          <div class="d-flex flex-wrap gap-3 mt-4">
            <router-link class="btn btn-primary btn-lg rounded-pill px-4" to="/shop">Shop Bikes</router-link>
            <router-link class="btn btn-outline-light btn-lg rounded-pill px-4" to="/services">Explore Services</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
