<template>
    <main class="app-base-apparel-coming-soon">
        <div class="container">
            <header>
                <img src="../assets/images/logo.svg" alt="Base Apparel Logo" />
            </header>
            <div class="hero"></div>
            <h1><span class="accent">We're</span> <span>Coming</span> <span>Soon</span></h1>
            <div class="content">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</div>
            <div class="form">
                <div class="controls">
                    <input type="email" v-model="emailAddress" placeholder="Email Address" aria-placeholder="Email Address" />
                    <img v-if="!isValid" class="validation-icon" src="../assets/images/icon-error.svg" alt="Validation error icon" />
                    <button type="button" v-on:click="signup"><img src="../assets/images/icon-arrow.svg" alt="Submit button icon" /></button>
                </div>
                <div v-if="!isValid" class="validation-errors">Please provide a valid email</div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
    name: "BaseApparelComingSoon",
    data() {
        const emailAddress = ref("");
        const isValid = ref(true);
        const validate =function() {
            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailAddress.value)) {
                isValid.value = true;
            } else {
                isValid.value = false;
            }
            return isValid.value;
        };
        const signup = function() {
            if (validate()) {
                alert("Thank you for registering!");
                emailAddress.value = "";
            }
        }
        return {
            emailAddress,
            isValid,
            signup
        }
    }
})
</script>