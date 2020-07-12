<template>

    <div class="ul-wrapper flex column">
        <div class="top">
            <img src="@/assets/images/png/logo-footer.png" class="logo" />
        </div>
        <ul class="ul flex column">
            <li
                class="inline-flex li"
                v-for="(item, index) in contactData"
                :key="item.title+index"
            >
            <img :src="item.icon" :alt="item.title" class="icon" />
                <div class="flex column">
                    <h5 class="body-bold">{{ item.title }}</h5>
                    <a
                        class="link white-text body-regular"
                        :href="item.link"
                    >
                        {{ item.description }}
                    </a>
                </div>
            </li>
        </ul>
        <div class="flex align-flex-start qr-container">
            <img src="@/assets/images/png/OgiveTechnologyQR.png" alt="address" />
        </div>
    </div>
</template>

<script>

import { contactData } from "./data";

export default {
    name: "Section1",

    data() {
        return {
            contactData,
        };
    },
};
</script>
