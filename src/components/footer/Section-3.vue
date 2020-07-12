<template>

    <div class="ul-wrapper flex column">
        <div class="top">
            <h3 class="heading-bold">Subscribe Now</h3>
        </div>
        <div class="input-group ul-like">
            <input type="text" placeholder="Email address" class="input" id="subscribe"/>
            <button class="button primary-bg hover" @click.prevent="subscribe">
                <img src="@/assets/images/png/misc/right.png" />
            </button>
        </div>
        <p
            :class="{'body-regular success-text': true, none: !showSuccess}"
        >
            Your are subscribed.
        </p>
        <p
            :class="{'body-regular error-text': true, none: !showError}"
        >
            Unable to subscribe. Please check you internet connection.
        </p>
        <p
            :class="{'body-regular error-text': true, none: !showEmailError}"
        >
            Email Required
        </p>
        <div class="top ul-like">
            <h3 class="heading-bold">Follow us</h3>
        </div>
        <div class="flex">
            <a
                v-for="(item, index) in socialLinkData"
                :key="'socilal'+index"
                :href="item.link"
                class="social-link"
            >
                <img :src="item.src" />
            </a>
        </div>
        <div class="request-demo">
            <button class="button primary-bg uppercase white-text hover" @click="show">
                Request a demo
            </button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

import { SUBSCRIBE } from "@/scripts/constants/endpoints";
import { socialLinkData } from "./data";

export default {
    name: "Section3",

    data() {
        return {
            socialLinkData,
            showSuccess: false,
            showError: false,
            showEmailError: false,
        };
    },
    methods: {
        show() {
            this.$modal.show("Request-Demo");
        },

        subscribe() {
            const email = document.getElementById("subscribe").value;

            if (email === "") {
                this.showEmailError = true;
                setTimeout(() => {
                    this.showEmailError = false;
                }, 2000);
                return;
            }

            this.showEmailError = false;
            this.showError = false;
            this.showSuccess = false;

            axios.post(SUBSCRIBE, qs.stringify({ email }))
                .then(() => {
                    this.showSuccess = true;
                    setTimeout(() => {
                        this.showSuccess = false;
                    }, 5000);
                })
                .catch((err) => {
                    console.log(err);
                    this.showError = true;
                    setTimeout(() => {
                        this.showError = false;
                    }, 5000);
                });
        },
    },
};
</script>
