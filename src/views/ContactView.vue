<template>
  <section class="section">
    <div class="container">
      <div class="row g-5 align-items-start">
        <div class="col-lg-6">
          <span class="section-label">Contact</span>
          <h1 class="section-title">Let’s get you rolling.</h1>
          <p class="lead-text">
            Need a bike consultation, repair quote, or a custom setup recommendation? Send us a message and our team will be in touch.
          </p>

          <div class="info-panel p-4 mt-4">
            <h3 class="h4 mb-3">Visit or call</h3>
            <ul class="list-unstyled mb-0 lead-text">
              <li><strong>Shop:</strong> {{ storeDetails.address }}</li>
              <li><strong>Phone:</strong> {{ storeDetails.phone }}</li>
              <li><strong>Email:</strong> {{ storeDetails.email }}</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6">
          <form
            class="contact-form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSf8h9x1zYwVdBOl4EOXv3dXvB2c8E8PScg0AQlR0KrD4IKH7Q/formResponse"
            method="POST"
            target="_blank"
          >
            <div class="mb-3">
              <label class="form-label" for="fullName">Full name</label>
              <input id="fullName" class="form-control" type="text" name="entry.123456789" placeholder="Your name" required />
            </div>

            <div class="mb-3">
              <label class="form-label" for="email">Email address</label>
              <input id="email" class="form-control" type="email" name="entry.987654321" placeholder="you@example.com" required />
            </div>

            <div class="mb-3">
              <label class="form-label" for="interest">What do you need?</label>
              <select id="interest" class="form-select" name="entry.456789123">
                <option value="Bike purchase">Bike purchase</option>
                <option value="Repair service">Repair service</option>
                <option value="Custom fitting">Custom fitting</option>
                <option value="General question">General question</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label" for="message">Message</label>
              <textarea id="message" class="form-control" rows="5" name="entry.147258369" placeholder="Tell us about your riding goals..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg rounded-pill px-4">Send message</button>
          </form>
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
