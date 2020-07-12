<template>
    <modal
        name="Request-Demo"
        transition="pop-out"
        :width="width"
        :focus-trap="true"
        :height="height"
        style="z-index:99999"
    >
        <form id="request-demo-form" class="form white-bg h-100">
            <button class="button icon" @click.prevent="hide">
                <i class="fa fa-times" />
            </button>
            <h3 class="heading-bold uppercase primary-text text-center">Request Demo</h3>
            <Banner :message="bannerMessage" :type="bannerMessageType" :show="bannerShow"/>
            <div class="fields-wrapper">
                <div class="row">

                    <div class="h-label-input col-xs-2 p-r-4 p-l-4">
                        <label
                            for="request-form-first-name"
                            :class="{label: true, 'error-text': $v.firstName.$error}"
                        >
                            First Name*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.firstName.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="first name"
                            id="request-form-first-name"
                            placeholder="First Name"
                            v-model.trim="$v.firstName.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.firstName.$error}"
                        >
                            *First Name is required.
                        </p>
                    </div>

                    <div class="h-label-input col-xs-2 p-l-4 p-r-4">
                        <label
                            for="request-form-last-name"
                            :class="{label: true, 'error-text': $v.lastName.$error}"
                        >
                            Last Name*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.lastName.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="last name"
                            id="request-form-last-name"
                            placeholder="Last Name"
                            v-model.trim="$v.lastName.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.lastName.$error}"
                        >
                            *Last Name is required.
                        </p>
                    </div>
                </div>

                <div class="h-label-input p-l-4 p-r-4">
                    <label
                        for="request-form-email"
                        :class="{label: true, 'error-text': $v.email.$error}"
                    >
                        Email*
                    </label>
                    <input
                        :class="{
                            'error-border': $v.email.$error,
                            input: true,
                            'with-border': true
                        }"
                        name="email"
                        id="request-form-email"
                        placeholder="Email"
                        v-model.trim="$v.email.$model"
                    />
                    <p
                        :class="{'required-msg': true, 'none': !$v.email.$error}"
                    >
                        *Please check email.
                    </p>
                </div>

                <div class="h-label-input p-l-4 p-r-4">
                    <label
                        for="request-form-company"
                        :class="{label: true, 'error-text': $v.company.$error}"
                    >
                        Company*
                    </label>
                    <input
                        :class="{
                            'error-border': $v.company.$error,
                            input: true,
                            'with-border': true
                        }"
                        name="company"
                        id="request-form-company"
                        placeholder="Company"
                        v-model.trim="$v.company.$model"
                    />
                    <p
                        :class="{'required-msg': true, 'none': !$v.company.$error}"
                    >
                        *Company is required.
                    </p>
                </div>

                <div class="row">
                    <div class="h-label-input p-r-4 col-xs-2 p-l-4">
                        <label
                            for="request-form-contact"
                            :class="{label: true, 'error-text': $v.contact.$error}"
                        >
                            Contact*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.contact.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="contact"
                            id="request-form-contact"
                            placeholder="Contact Number"
                            v-model.trim="$v.contact.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.contact.$error}"
                        >
                            *Please check contact number
                        </p>
                    </div>

                    <div class="h-label-input col-xs-2 p-l-4 p-r-4">
                        <label
                            for="request-form-country"
                            :class="{label: true, 'error-text': $v.country.$error}"
                        >
                            Country*
                        </label>
                        <input
                            :class="{
                                'error-border': $v.country.$error,
                                input: true,
                                'with-border': true
                            }"
                            name="country"
                            id="request-form-country"
                            placeholder="Country"
                            v-model.trim="$v.country.$model"
                        />
                        <p
                            :class="{'required-msg': true, 'none': !$v.country.$error}"
                        >
                            *Country is required
                        </p>
                    </div>
                </div>

                <div class="h-label-input p-l-4 p-r-4">
                    <label
                        for="request-form-message"
                        :class="{label: true, 'error-text': $v.message.$error}"
                    >
                        How can we help?*
                    </label>
                    <textarea
                        :class="{
                            'error-border': $v.message.$error,
                            'textarea sm': true,
                            'with-border': true
                        }"
                        name="message"
                        id="request-form-message"
                        placeholder="Message"
                        v-model.trim="$v.message.$model"
                    />
                    <p
                        :class="{'required-msg': true, 'none': !$v.message.$error}"
                    >
                        *This is required.
                    </p>
                </div>
            </div>

            <div class="row justify-space-between p-l-4 p-r-4">
                <button
                    class="button primary-bg white-text hover focus"
                    @click.prevent="submitForm"
                    :disabled="$v.$invalid || disableSubmit"
                >
                    Submit Request
                </button>
                <button class="button black-bg white-text focus" @click.prevent="hide">
                    Cancel
                </button>
            </div>
        </form>
    </modal>
</template>

<style scoped>
.icon {
    position: absolute;
    right: 2rem;
    top: 1rem;
}
</style>

<script>
import axios from "axios";
import qs from "qs";

import { REQUEST_DEMO } from "@/scripts/constants/endpoints";
import Banner from "@/components/banner/Banner.vue";

import { getBaseFontSize } from "@/scripts/screen";
import {
    required, minLength, email, numeric,
} from "vuelidate/lib/validators";

export default {
    name: "RequestDemoModal",
    components: {
        Banner,
    },
    data() {
        return {
            height: 0,
            width: 0,
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            contact: "",
            country: "",
            message: "",
            bannerMessage: "",
            bannerMessageType: "",
            bannerShow: false,
            disableSubmit: false,
        };
    },

    validations: {
        firstName: {
            required,
        },
        lastName: {
            required,
        },
        company: {
            required,
        },
        country: {
            required,
        },
        message: {
            required,
        },
        contact: {
            required,
            numeric,
            minLength: minLength(10),
        },
        email: {
            required,
            email,
        },
    },

    methods: {
        submitForm() {
            if (this.$v.$invalid) {
                console.log("Invalid");
            } else {
                this.disableSubmit = true;
                const data = {
                    firstName: this.$v.firstName.$model,
                    lastName: this.$v.lastName.$model,
                    email: this.$v.email.$model,
                    company: this.$v.company.$model,
                    contact: this.$v.contact.$model,
                    country: this.$v.country.$model,
                    message: this.$v.message.$model,
                };

                axios.post(REQUEST_DEMO, qs.stringify(data))
                    .then(() => {
                        this.bannerMessage = "We have successfully received you request.";
                        this.bannerMessageType = "success";
                        this.bannerShow = true;

                        setTimeout(() => {
                            this.bannerShow = false;
                            this.disableSubmit = false;
                            setTimeout(() => { this.$v.$reset(); }, 0);
                        }, 8000);
                    })
                    .catch((err) => {
                        console.log(err);
                        this.bannerMessage = "Unexpected error. Please try after sometime";
                        this.bannerMessageType = "error";
                        this.bannerShow = true;
                        Object.assign(this.$data, {
                            firstName: "",
                            lastName: "",
                            email: "",
                            company: "",
                            contact: "",
                            country: "",
                            message: "",
                            bannerMessage: "",
                            bannerMessageType: "",
                            bannerShow: false,
                            disableSubmit: false,
                        });

                        setTimeout(() => {
                            this.bannerShow = false;
                            this.disableSubmit = false;
                        }, 8000);
                    });
            }
        },

        hide() {
            this.$modal.hide("Request-Demo");
        },
    },

    created() {
        const baseFontSize = getBaseFontSize();
        const MODAL_WIDTH = 40 * baseFontSize;
        const MODAL_HEIGHT = 50 * baseFontSize;

        console.log(window.innerWidth);

        this.height = MODAL_HEIGHT > window.innerHeight ? window.innerHeight : MODAL_HEIGHT;
        this.width = MODAL_WIDTH > window.innerWidth ? window.innerWidth : MODAL_WIDTH;
    },
};
</script>
