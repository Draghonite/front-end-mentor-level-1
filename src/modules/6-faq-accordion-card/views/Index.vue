<template>
    <main class="app-faq-accordion-card">
        <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
                <h1>FAQ</h1>
                <div class="list-items">
                    <div v-for="item in items" :key="item" class="list-item" :class="{active: item.IsShown}">
                        <button class="collapsible" type="button" v-on:click="item.IsShown = !item.IsShown">
                            <span class="title">{{item.Title}}</span>
                            <span class="icon icon-arrow"></span>
                        </button>
                        <div class="content">{{item.Content}}</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import '../assets/scss/style.scss';
import { defineComponent } from "@vue/runtime-core";

type ListItem = {
    Title: string
    Content: string
    IsShown: boolean
}

export { ListItem };

export default defineComponent({
    name: "FAQAccordion",
    data: function() {
        const items: Array<ListItem> = [
            {
                Title: "How many team members can I invite?",
                Content: "Serious question? Ok. Zero. You can invite no one.",
                IsShown: false
            },
            {
                Title: "What is the maximum file upload size?",
                Content: "No more than 2GB. All files in your account must fit your allotted storage space.",
                IsShown: true
            },
            {
                Title: "How do I reset my password?",
                Content: "Ummm, you can't.",
                IsShown: false
            },
            {
                Title: "Can I cancel my subscription?",
                Content: "I mean, you can try, but, like, why?",
                IsShown: false
            },
            {
                Title: "Do you provide additional support?",
                Content: "Maybe?!  Who's asking?",
                IsShown: false
            }
        ];
        return {
            items
        };
    }
})
</script>