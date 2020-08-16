<template>
  <div class="section" id="showcase">
      <div class="heading-container">
          <h3 class="heading">Invite nature <br />to your homeland</h3>
          <p class="heading-para">We Design Your Space Of Comfort</p>
      </div>

    <div class="card-section">
        <div
            class="card-row translate"
            v-for="(items, index) in cardRows"
            :key="'card-row-'+index"
        >
            <div
                class="card-container"
                v-for="(item, key) in items"
                :key="key+'card-container'+index"
            >

            <img class="card-img" :src="item.img" />
            <div class="card-desc">
                <h4 class="card-heading">
                    {{item.heading}}
                </h4>
                <p>
                    {{ item.description }}
                </p>
            </div>
            </div>
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
