<template>
    <main class="app-three-column-preview">
        <div class="cards">
            <div class="card sedans">
                <div class="card-body">
                    <div class="icons icon-sedans"></div>
                    <h1>Sedans</h1>
                    <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
                    <button type="button" class="btn">Learn More</button>
                </div>
            </div>
            <div class="card suvs">
                <div class="card-body">
                    <div class="icons icon-suvs"></div>
                    <h1>SUVs</h1>
                    <p>Take an SVU for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
                    <button type="button" class="btn">Learn More</button>
                </div>
            </div>
            <div class="card luxury">
                <div class="card-body">
                    <div class="icons icon-luxury"></div>
                    <h1>Luxury</h1>
                    <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
                    <button type="button" class="btn">Learn More</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ThreeColumnPreview"
})
</script>