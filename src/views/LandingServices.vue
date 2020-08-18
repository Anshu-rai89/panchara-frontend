<template>
  <div class="section section-dark" id="services">
      <div class="heading-container">
          <h3 class="heading">Our Services</h3>
      </div>
        <p class="heading-bottom-para">
            Our motive emphasizes on Sustainable Development and our
            services strive in the accomplishment of the same. We offer
            to prioritize complete designing and analysis of command
            and control centres, continuity of Government facilities
            in addition to communication centers with attention to details
            over Burst Slab designs, Full Blast Engineering and Mitigation
            designs. Alongwith a broad spectrum of technolgies, we deploy
            strong engineering manpower to build solutions that meet each
            project’s essentials.
        </p>

    <div class="card-section pad">
        <div class="card-row">
            <div
                :class="'card-container shaded ' + item.className"
                v-for="(item, key) in cardData"
                :key="key+'service-card'"
            >
                <div class="card-img-div">
                    <img class="card-img" :src="item.img" />
                    <h2 class="title">
                        {{ item.title }}
                    </h2>
                </div>
                <div class="card-desc">
                    <p>
                        {{ item.description }}
                    </p>
                    <ul>
                        <li
                            v-for="(list, key) in item.list"
                            :key="key+'list'"
                        >
                            {{ list }}
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>

        <div class="card-select-container">
            <div
                @click="selectCard(key)"
                :class="'select-button ' + item.className"
                v-for="(item,key) in cardData"
                :key="'card-button-'+key"
                :aria-card="key"
            >
            <div class="background" />
            </div>
        </div>
  </div>

</template>

<script>
import { servicesCard } from "./data";

export default {
    name: "LandingShowcase",
    data() {
        return {
            cardData: servicesCard,
        };
    },

    mounted() {
        this.cardData[1].className = "selected";
    },
    methods: {
        selectCard(key) {
            let i;
            const card = this.cardData;
            for (i = 0; i < card.length; i += 1) {
                card[i].className = "";
            }

            card[key].className = "selected";
            this.cardData = card;
        },
    },
};
</script>
