<template>
    <main class="app-order-summary image-pattern-background">
        <div class="card">
            <div class="card-header image-illustration-hero m-0"></div>
            <div class="card-body">
                <h1>Order Summary</h1>
                <div class="content">
                    You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                </div>
                <div class="plan">
                    <div class="details">
                        <div class="icon icon-music"></div>
                        <div class="name-price">
                            <h2 class="name">Annual Plan</h2>
                            <div class="price">$59.99/year</div>
                        </div>
                        <button type="button" class="btn btn-link">Change</button>
                    </div>
                </div>
                <div class="actions">
                    <button type="button" class="btn btn-lg primary">Proceed to Payment</button>
                    <button type="button" class="btn btn-lg secondary">Cancel Order</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "OrderSummary"
})
</script>