<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<style lang="sass">
@import "@/styles/main.scss"
</style>

<script>
import Navbar from "@/components/navbar/Navbar.vue";

export default {
    components: {
        Navbar,
    },
};
</script>
