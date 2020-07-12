<template>
    <footer
        class="footer container black-20-bg flex column align-center body-regular white-text"
    >
    <div class="background" />
    <div class="wrapper xl section p-t-b flex footer-wrapper">
        <Section1 />
        <Section2 />
        <Section3 />
    </div>
        <div
            class="copyright black-bg text-center flex-1 align-self-stretch"
        >
            &copy; 2020
            <a class="link primary-text" href="/">Ogive Technology</a>,
            all rights reserved.
        </div>
    </footer>
</template>

<script>

import Section1 from "./Section-1.vue";
import Section2 from "./Section-2.vue";
import Section3 from "./Section-3.vue";

export default {
    name: "Footer",
    components: { Section1, Section2, Section3 },
};
</script>
