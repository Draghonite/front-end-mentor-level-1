<template>
    <main class="intro-component-with-signup-form">
        <div class="container">
            <header>
                <h1>Learn to code by watching others</h1>
                <div class="content">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</div>
            </header>
            <div class="sign-up">
                <div class="card try">
                    <div class="card-body">
                        <div class="content">
                            <h2>Try it free 7 days</h2> then $20/mo. thereafter
                        </div>
                    </div>
                </div>
                <div class="card form">
                    <div class="card-body">
                        <div class="controls">
                            <div class="control" :class="{'invalid': validation.isValidationEnabled && !validation.isFirstNameValid}">
                                <div class="input">
                                    <input v-model="model.FirstName" type="text" placeholder="First Name" aria-placeholder="First Name" />
                                    <span class="validation-icon"><img src="../assets/images/icon-error.svg" alt="Validation Error Icon" /></span>
                                </div>
                                <div class="validation-error">First Name cannot be empty</div>
                            </div>
                            <div class="control" :class="{'invalid': validation.isValidationEnabled && !validation.isLastNameValid}">
                                <div class="input">
                                    <input v-model="model.LastName" type="text" placeholder="Last Name" aria-placeholder="Last Name" />
                                    <span class="validation-icon"><img src="../assets/images/icon-error.svg" alt="Validation Error Icon" /></span>
                                </div>
                                <div class="validation-error">Last Name cannot be empty</div>
                            </div>
                            <div class="control" :class="{'invalid': validation.isValidationEnabled && !validation.isEmailAddressValid}">
                                <div class="input">
                                    <input v-model="model.EmailAddress" type="email" placeholder="Email Address" aria-placeholder="Email Address" />
                                    <span class="validation-icon"><img src="../assets/images/icon-error.svg" alt="Validation Error Icon" /></span>
                                </div>
                                <div class="validation-error">Looks like this is not an email</div>
                            </div>
                            <div class="control" :class="{'invalid': validation.isValidationEnabled && !validation.isPasswordValid}">
                                <div class="input">
                                    <input v-model="model.Password" type="password" placeholder="Password" aria-placeholder="Password" />
                                    <span class="validation-icon"><img src="../assets/images/icon-error.svg" alt="Validation Error Icon" /></span>
                                </div>
                                <div class="validation-error">Password cannot be empty</div>
                            </div>
                            <button v-on:click="signup" type="button" class="control btn">Claim your Free Trial</button>
                        </div>
                        <div class="terms">By clicking the button, you are agreeing to our <button type="button" class="btn btn-link">Terms and Services</button></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent, reactive } from "vue";

export default defineComponent({
    name: "IntroComponentWithSignUpForm",
    data() {
        const model: any = reactive({
            FirstName: "",
            LastName: "",
            EmailAddress: "",
            Password: ""
        });
        const validation: any = reactive({
            isValidationEnabled: false,
            isFirstNameValid: true,
            isLastNameValid: true,
            isEmailAddressValid: true,
            isPasswordValid: true,
            isValid: true
        });
        const validate = () => {
            validation.isValidationEnabled = true;
            validation.isFirstNameValid = model.FirstName !== "";
            validation.isLastNameValid = model.LastName !== "";
            validation.isPasswordValid = model.Password !== "";
            validation.isEmailAddressValid = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(model.EmailAddress));
            validation.isValid = 
                validation.isFirstNameValid && 
                validation.isLastNameValid &&
                validation.isEmailAddressValid &&
                validation.isPasswordValid;
        }
        const clearForm = () => {
            model.FirstName = "";
            model.LastName = "";
            model.EmailAddress = "";
            model.Password = "";
            validation.isValid = true;
            validation.isFirstNameValid = true;
            validation.isLastNameValid = true;
            validation.isPasswordValid = true;
            validation.isEmailAddressValid = true;
            validation.isValidationEnabled = false;
        }
        const signup = () => {
            validate();
            if (validation.isValid) {
                alert("Thank you for registering!");
                clearForm();
            }
        }
        return {
            model,
            validation,
            signup
        }
    }
})
</script>