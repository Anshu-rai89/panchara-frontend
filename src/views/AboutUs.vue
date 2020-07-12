<template>
  <div class="section about-us" id="about-us">
      <div class="about-wrapper">

        <div class="flex flex-1 align-center justify-center">
            <div class="round-card">
                <img
                    style="height: 100%; width: 100%;"
                    src="@/assets/images/png/card-image.png"
                />
            </div>
        </div>
        <div class="flex flex-1 align-center justify-center column">
            <div class="heading-container">
                <h3 class="heading">About Us</h3>
            </div>
            <p class="heading-bottom-para">
                Centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in 2007
                with the release of Letraset
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
