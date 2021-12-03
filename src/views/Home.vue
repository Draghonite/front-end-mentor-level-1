<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/nft-preview-card">NFT Preview Card</router-link> |
      <router-link to="/order-summary">Order Summary</router-link> |
      <router-link to="/stats-preview">Stats Preview</router-link> |
      <router-link to="/three-column-preview">Three Column Preview</router-link> |
      <router-link to="/profile-card">Profile Card</router-link> |
      <router-link to="/faq-accordion-card">FAQ Accordion Card</router-link> |
      <router-link to="/article-preview">Article Preview</router-link> |
      <router-link to="/social-proof-section">Social Proof Section</router-link> |
      <router-link to="/four-card-feature-section">Four Card Feature Section</router-link> |
      <router-link to="/base-apparel-coming-soon">Base Apparel Coming Soon</router-link> |
      <router-link to="/intro-component-with-signup-form">Intro Component with Signup Form</router-link> |
      <router-link to="/single-price-grid">Single Price Grid</router-link>
    </div>
    <!-- TODO: setup as a portfolio site and link to all projects (modules) as well as GitHub repo -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>
