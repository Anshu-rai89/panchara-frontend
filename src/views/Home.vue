<template>
  <div class="body-container">
    <LandingHero />
    <LandingShowcase />
    <LandingServices />
    <AboutUs />
    <ContactUs />
  </div>
</template>

<script>

import LandingHero from "./LandingHero.vue";
import LandingShowcase from "./LandingShowcase.vue";
import LandingServices from "./LandingServices.vue";
import AboutUs from "./AboutUs.vue";
import ContactUs from "./ContactUs.vue";

export default {
    name: "Home",
    components: {
        LandingHero,
        LandingShowcase,
        LandingServices,
        AboutUs,
        ContactUs,
    },
};
</script>
