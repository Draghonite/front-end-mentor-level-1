<template>
    <main class="ping-coming-soon-page">
        <div class="container">
            <header>
                <img src="../assets/images/logo.svg" alt="Logo" />
                <h1><span class="subtle">We are launching</span> soon!</h1>
                <div class="content">Subscribe and get notified</div>
            </header>
            <form v-on:submit="onSubmit">
                <div class="control" :class="{'invalid': !isEmailValid}">
                    <!-- Ideally use type="email"; "text" is used to follow challenge requirements -->
                    <input v-model="email" type="text" placeholder="Your email address..." />
                    <span class="validation-error">Please provide a valid email address</span>
                </div>
                <button type="submit">Notify Me</button>
            </form>
            <img src="../assets/images/illustration-dashboard.png" alt="Dashboard Illustration" />
            <div class="social">
                <div><i class="fa fa-facebook-f"></i></div>
                <div><i class="fa fa-twitter"></i></div>
                <div><i class="fa fa-instagram"></i></div>
            </div>
            <footer>
                &copy; Copyright Ping. All rights reserved.
            </footer>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent } from "@vue/runtime-core";
import { ref } from 'vue';

export default defineComponent({
    name: "PingComingSoonPage",
    data() {
        const email = ref("");
        const isEmailValid = ref(true);
        const onSubmit = (e: any) => {
            e.preventDefault();
            isEmailValid.value = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value);
            if (isEmailValid.value) {
                alert("Thank you for subscribing.");
                email.value = "";
            }
        };
        return {
            email,
            isEmailValid,
            onSubmit
        }
    }
})
</script>