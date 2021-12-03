<template>
    <main class="single-price-grid">
        <div class="card">
            <section class="header">
                <h1>Join our community</h1>
                <h2>30-day, hassle-free money back guarantee</h2>
                <div class="content">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</div>
            </section>
            <section class="action">
                <h2>Monthly Subscription</h2>
                <div class="price"><span class="amount">$29</span> <span class="frequency">per month</span></div>
                <div class="content">Full access for less than $1 a day</div>
                <button type="button">Sign Up</button>
            </section>
            <section class="about">
                <h2>Why Us</h2>
                <ul>
                    <li>Tutorials by industry experts</li>
                    <li>Peer &amp; expert code review</li>
                    <li>Coding exercises</li>
                    <li>Access to our GitHub repos</li>
                    <li>Community forum</li>
                    <li>Flashcard decks</li>
                    <li>New videos every week</li>
                </ul>
            </section>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "SignlePriceGrid"
})
</script>