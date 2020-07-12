<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<style lang="sass">
@import "@/styles/main.scss"
</style>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
    components: {
        Navbar,
        Footer,
    },
};
</script>
