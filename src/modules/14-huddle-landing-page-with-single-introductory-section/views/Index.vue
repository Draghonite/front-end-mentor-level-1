<template>
    <main class="huddle-landing-page-with-single-introductory-section">
        <div class="container">
            <header>
                <img class="logo" src="../assets/images/logo.svg" alt="Logo">
                <img class="illustration w-100" src="../assets/images/illustration-mockups.svg" alt="Mockups Illustration">
            </header>
            <section>
                <h1>Build The Community Your Fans Will Love</h1>
                <div class="content">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</div>
                <button v-on:click="Register" type="button">Register</button>
            </section>
            <footer>
                <div class="social">
                    <div><i class="fa fa-facebook-f"></i></div>
                    <div><i class="fa fa-twitter"></i></div>
                    <div><i class="fa fa-instagram"></i></div>
                </div>
            </footer>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "HuddleLandingPage"
})
</script>