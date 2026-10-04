<template>
  <div>
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

    <section class="section bg-light">
      <div class="container">
        <div class="row g-4 align-items-center">
          <div class="col-lg-6">
            <span class="section-label">About us</span>
            <h2 class="section-title">Your neighborhood bike specialists.</h2>
            <p class="lead-text">
              Velocity Bikes brings together performance design, local expertise, and a rider-first experience.
              Whether you need a commuter setup, mountain-ready trail bike, or a tune-up before your next ride,
              our team is here to help you move faster and ride more confidently.
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
            <div class="info-panel p-4 p-lg-5">
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="feature-card h-100">
                    <h5>Custom fitting</h5>
                    <p class="mb-0 text-muted">We adjust saddle, reach, and frame geometry for comfort and power.</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="feature-card h-100">
                    <h5>Bike maintenance</h5>
                    <p class="mb-0 text-muted">Tune-ups and repairs to keep every ride smooth and safe.</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="feature-card h-100">
                    <h5>Premium gear</h5>
                    <p class="mb-0 text-muted">Helmets, lights, apparel, and accessories from trusted brands.</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="feature-card h-100">
                    <h5>Guided advice</h5>
                    <p class="mb-0 text-muted">Helpful recommendations for every budget and riding style.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-label">Visit us</span>
          <h2 class="section-title">Find our shop</h2>
        </div>

        <div class="row g-4 align-items-center">
          <div class="col-lg-6">
            <iframe
              class="map-frame"
              src="https://www.google.com/maps?q=Portland%20Bike%20Shop&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google map to Velocity Bikes"
            ></iframe>
          </div>
          <div class="col-lg-6">
            <div class="info-panel p-4 p-lg-5">
              <h3 class="mb-3">Stop by the shop</h3>
              <p class="lead-text mb-4">
                Visit us in person for fittings, wrench time, and a full day of cycling inspiration.
              </p>
              <ul class="list-unstyled lead-text mb-0">
                <li><strong>Address:</strong> 152 Ridge Avenue, Portland, OR</li>
                <li><strong>Hours:</strong> Mon-Sat: 9am - 6pm</li>
                <li><strong>Phone:</strong> (503) 555-0148</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
