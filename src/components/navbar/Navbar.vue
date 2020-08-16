<template>
    <header class="navbar flex" id="header">
        <div class="navbar-wrapper flex align-center flex-1">
            <router-link to="/" class="logo-container">
                <img class="logo" :src="PancharaLogo" @click="navClick('/home')"/>
                <img class="logo-title" :src="PancharaLogoTitle" @click="navClick('/home')"/>
            </router-link>
            <DesktopMenu :clickEvent="navClick"/>
            <MobileMenu :clickEvent="navClick"/>
        </div>
    </header>
</template>

<script>
import * as Route from "@/scripts/constants/routes";
import PancharaLogo from "@/assets/images/png/logo.png";
import PancharaLogoTitle from "@/assets/images/png/logo-title.png";
import navlinks from "./data";

import DesktopMenu from "./DesktopMenu.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
    name: "Navbar",
    data() {
        return {
            navlinks, showGradient: true, PancharaLogo, PancharaLogoTitle,
        };
    },
    components: {
        DesktopMenu,
        MobileMenu,
    },

    methods: {
        navClick(path) {
            const about = document.getElementById("about-us").getBoundingClientRect();
            const service = document.getElementById("services").getBoundingClientRect();
            const contact = document.getElementById("contact-us").getBoundingClientRect();
            const { height } = document.getElementById("header").getBoundingClientRect();

            switch (path) {
            case "/home":
                window.scrollTo(0, 0);
                break;
            case Route.ABOUT_US:
                window.scrollBy(0, about.top - height);
                break;

            case Route.SERVICES:
                window.scrollBy(0, service.top - height);
                break;

            case Route.CONTACT_US:
                window.scrollBy(0, contact.top - height);
                break;

            default:
                break;
            }
        },
    },
};
</script>
