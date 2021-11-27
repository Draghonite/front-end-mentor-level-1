<template>
    <main class="app-profile-card">
        <div class="card">
            <div class="card-header">
                <div class="card-header-bg bg-pattern-card"></div>
                <div class="picture image-victor"></div>
            </div>
            <div class="card-body">
                <div class="details">
                    <h1>Victor Crest <span class="age">26</span></h1>
                    <div class="location">London</div>
                </div>
                <div class="stats">
                    <div class="stat">
                        <span class="value">80K</span>
                        <span class="label">Followers</span>
                    </div>
                    <div class="stat">
                        <span class="value">803K</span>
                        <span class="label">Likes</span>
                    </div>
                    <div class="stat">
                        <span class="value">1.4K</span>
                        <span class="label">Photos</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "ProfileCard"
})
</script>