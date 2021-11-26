<template>
    <main class="app-stats-preview">
        <div class="card">
            <div class="card-header image-header"></div>
            <div class="card-body">
                <h1>Get <span class="accent">insights</span> that help your business grow.</h1>
                <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div class="stats">
                    <div class="stat">
                        <span class="value">10k+</span>
                        <span class="name">Companies</span>
                    </div>
                    <div class="stat">
                        <span class="value">314</span>
                        <span class="name">Templates</span>
                    </div>
                    <div class="stat">
                        <span class="value">12M+</span>
                        <span class="name">Queries</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "StatsPreview"
})
</script>