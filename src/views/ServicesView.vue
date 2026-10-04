<template>
  <section class="section">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-label">Services</span>
        <h1 class="section-title">Care that keeps your ride moving</h1>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="service in services" :key="service.title">
          <div class="service-item h-100">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="badge rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center" style="width: 42px; height: 42px;">{{ service.short }}</span>
              <h3 class="h5 mb-0">{{ service.title }}</h3>
            </div>
            <p class="text-muted mb-0">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    short: '01',
    title: 'Premium tune-ups',
    description: 'Full safety checks, brake tuning, drivetrain care, and on-the-road performance adjustments.',
  },
  {
    short: '02',
    title: 'Bike fitting',
    description: 'Precision fit sessions based on body position, riding style, and comfort preferences.',
  },
  {
    short: '03',
    title: 'Custom builds',
    description: 'From component upgrades to complete custom bike assemblies, tailored to your goals.',
  },
  {
    short: '04',
    title: 'Repair & diagnostics',
    description: 'Fast issue resolution for wheel alignment, gear indexing, and general mechanical concerns.',
  },
  {
    short: '05',
    title: 'Accessory installs',
    description: 'Lights, racks, locks, child seats, and performance upgrades installed with care.',
  },
  {
    short: '06',
    title: 'Seasonal prep',
    description: 'Spring and fall tune-ups to keep your bike ready for any weather and distance.',
  },
]
</script>
