<template>
  <section class="section">
    <div class="container">
      <div class="row g-5 align-items-start">
        <div class="col-lg-6">
          <span class="section-label">Contact</span>
          <h1 class="section-title">Call first.</h1>
          <p class="lead-text">
            We are a small repair cafe. We are known for our bike builds, and we do it out of love. Most likely, it will
            cost you nothing (parts if applicable, but we like to fix, not replace). However, you need to give us a
            phone call before you come in. Our hours vary, and we might not have the parts you need on hand. Remember,
            this is not our day job, and no one really sponsors us. We do it out of love.<br /><br />

            That being said, if you need an inner tube, just drop by. We got you.
          </p>

          <div class="info-panel p-4 mt-5">
            <h3 class="h4 mb-3">Address</h3>
            <ul class="list-unstyled mb-0 lead-text">
              <li><i class="bi bi-geo-alt-fill" /> {{ storeDetails.address }}</li>
              <li><i class="bi bi-phone-vibrate-fill" /> {{ storeDetails.phone }}</li>
              <li><i class="bi bi-envelope-heart-fill" /> {{ storeDetails.email }}</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6">
          <form class="contact-form"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScWtGSud2CWjKw4--0S5z1FtS-Q7TMqABg9k5B-vEjWHK6U9A/formResponse"
            method="POST" target="_blank">
            <div class="mb-3">
              <label class="form-label" for="fullName">Full name</label>
              <input id="fullName" class="form-control" type="text" name="entry.1179544305" placeholder="Your name"
                required />
            </div>

            <div class="mb-3">
              <label class="form-label" for="email">Email address</label>
              <input id="email" class="form-control" type="email" name="entry.445103507" placeholder="you@example.com"
                required />
            </div>

            <div class="mb-3">
              <label class="form-label" for="interest">What do you need?</label>
              <select id="interest" class="form-select" name="entry.618774107">
                <option value="Bike purchase">Bike purchase</option>
                <option value="Repair service">Repair service</option>
                <option value="Custom fitting">Custom fitting</option>
                <option value="General question">General question</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label" for="message">Message</label>
              <textarea id="message" class="form-control" rows="5" name="entry.225410686"
                placeholder="Tell us about your riding goals..." required></textarea>
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
