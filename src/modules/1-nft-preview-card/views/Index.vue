<template>
    <div class="app-nft-card-view">
        <main class="card">
            <div class="card-header">
                <div class="card-bg image-equilibrium"></div>
                <div class="overlay">
                    <div class="icon-view"></div>
                </div>
            </div>
            <div class="card-body">
                <h1>Equilibrium #3429</h1>
                <div class="content">
                    Our Equilibrium collection promotes balance and and calm.
                </div>
                <div class="meta d-flex justify-content-between">
                    <div class="price d-flex align-items-center">
                        <div class="icon icon-ethereum m-r-half"></div> 0.041 ETH
                    </div>
                    <div class="d-flex align-items-center"><div class="icon icon-clock m-r-half"></div> 3 days left</div>
                </div>
                <div class="card-footer">
                    <div class="attribution">
                        <div class="image-avatar avatar"></div>
                        Creation of <span class="name">Jules Wyvern</span>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import '../assets/scss/style.scss'
import { defineComponent } from 'vue'

export default defineComponent({
    name: "NFTPreviewCard"
})
</script>
