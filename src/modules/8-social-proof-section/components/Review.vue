<template>
    <div v-if="review" class="review card">
        <div class="card-header">
            <div class="picture"><img :src="'data:'+review.Reviewer.Picture.mime+';base64,'+review.Reviewer.Picture.data" :alt="review.Reviewer.Name" /></div>
            <div>
                <div class="name">{{review.Reviewer.Name}}</div>
                <div class="status">{{review.Reviewer.Status}}</div>
            </div>
        </div>
        <div class="card-body content">"{{review.Review}}"</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "Review",
    props: ['review']
})
</script>