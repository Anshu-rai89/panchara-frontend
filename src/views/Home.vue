<template>
  <div class="body-container">
    <LandingHero />
    <LandingShowcase />
    <LandingServices />
  </div>
</template>

<script>
import LandingHero from "./LandingHero.vue";
import LandingShowcase from "./LandingShowcase.vue";
import LandingServices from "./LandingServices.vue";

export default {
    name: "Home",
    components: { LandingHero, LandingShowcase, LandingServices },
};
</script>
