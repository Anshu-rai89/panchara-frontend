<template>
    <header class="navbar container flex align-center" id="header">
        <router-link to="/" class="logo-container">
            <img class="logo" :src="PancharaLogo"/>
            <img class="logo-title" :src="PancharaLogoTitle" />
        </router-link>
        <DesktopMenu />
        <MobileMenu />
    </header>
</template>

<script>

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
};
</script>
