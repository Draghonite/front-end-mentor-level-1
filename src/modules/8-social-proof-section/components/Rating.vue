<template>
    <div v-if="rating" class="star-rating">
        <div class="stars">
            <div v-for="star in stars" :key="star" class="star"></div>
        </div>
        <div class="content">{{rating.Title}}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "Rating",
    props: ['rating'],
    computed: {
        stars: function() {
            return Array.from({ length: +this.rating.Stars })
        }
    }
})
</script>