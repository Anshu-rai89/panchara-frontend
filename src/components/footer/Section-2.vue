<template>

    <div class="ul-wrapper flex column">
        <div class="top">
            <h3 class="heading-bold">Quick Links</h3>
        </div>
        <ul class="ul flex column">
            <li
                class="inline-flex li arrow"
                v-for="(item, index) in quickLinksData"
                :key="item.title+index"
            >
                <router-link
                    class="body-regular white-text underline"
                    :to="item.link"
                >
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import { quickLinksData } from "./data";

export default {
    name: "Section2",

    data() {
        return {
            quickLinksData,
        };
    },
};
</script>
