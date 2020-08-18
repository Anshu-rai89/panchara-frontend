<template>
  <div class="section about-us" id="about-us">
      <div class="about-wrapper">

        <div class="flex flex-1 align-center justify-center">
            <div class="round-card">
                <img
                    style="height: 100%; width: 100%;"
                    src="@/assets/images/png/about-us.png"
                />
            </div>
        </div>
        <div class="flex flex-1 align-center justify-center column">
            <div class="heading-container">
                <h3 class="heading">About Us</h3>
            </div>
            <p class="about-us-p">
                We specialize in understanding the requirements of our clients
                by thorough analysis of their budget and goals. We investigate
                the area of construction for sustainable site design and aim to
                use minimal resources that supports green homelands. Risk
                assessment is one of our paramount objectives. The team focuses
                on the modelling of energy-efficient buildings with proper
                feasibility check and safety measures.
            </p>
        </div>
      </div>
  </div>

</template>

<script>
import { showCaseCard } from "./data";

export default {
    name: "LandingShowcase",
    data() {
        return {
            cardData: showCaseCard,
        };
    },
    computed: {
        cardRows() {
            const colSize = 3;
            const card = [];
            let i;
            for (i = 0; i < this.cardData.length; i += colSize) {
                card.push(this.cardData.slice(i, i + colSize));
            }

            return card;
        },
    },
};
</script>
