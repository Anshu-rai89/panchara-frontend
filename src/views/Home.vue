<template>
  <div class="body-container">
    <LandingHero />
    <LandingShowcase />
  </div>
</template>

<script>
import LandingHero from "./LandingHero.vue";
import LandingShowcase from "./LandingShowcase.vue";

export default {
    name: "Home",
    components: { LandingHero, LandingShowcase },
};
</script>
