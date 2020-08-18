<template>
  <div class="landing-hero" id="home">
      <img
        src="@/assets/images/png/landing-background.png"
        class="landing-hero-img"
        />
        <div class="landing-title">
            <span class="primary-text body-regular">Nature</span>
            <span class="dot" />
            <span class="black-text body-regular">Home</span>
        </div>

        <div class="landing-card-container">
          <div class="card-wrapper">
            <div
              class="landing-card"
              v-for="(item, key) in landingCard"
              :key="'landign-card'+key"
            >
              <img :src="item.img" :alt="item.title">
              {{ item.title }}
            </div>
          </div>
          <div class="content">
            Military grade pre-fabricated shelter systems and CBRE
            (chemical, biological, radioactive and explosive)
            equipments augmented with air filtration, blast doors and valves are utilized
          </div>
        </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables";

  .landing-card-container {
    display: flex;
    position: absolute;

    top: 4%;
    right: -15rem;
    transition: 0.5s;

    &:hover {
      transform: translate(-15rem)
    }
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
  }

  .content {
    width: 10rem;
    background: $black;
    color: $white;
    font-family: $body-regular;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    text-align: center;
  }

  .landing-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $body-bold;
    text-transform: uppercase;
    background: #FFFFFF;
    box-shadow: inset 0px 10px 40px rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    border-right: 0.5rem solid #000;
    border-left: 0.5rem solid #000;
    border-top: 0.25rem solid #000;
    border-bottom: 0.25rem solid #000;
    transition: 0.3s;

    // &:hover {
    //   transform: translate(-5rem);
    // }

    &:first-child {
      border-top-width: 0.5rem;
    }
    &:last-child {
      border-bottom-width: 0.5rem;
    }

    img {
      height: 3rem;
      width: 3rem;
      margin-bottom: 1rem;
    }
  }
</style>
<script>

import { landingCard } from "./data";

export default {
    name: "LandingHero",

    data() {
        return {
            landingCard,
        };
    },

    mounted() {
        console.log(this.landingCard);
    },
};
</script>
