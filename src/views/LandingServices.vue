<template>
  <div class="section section-dark" id="services">
      <div class="heading-container">
          <h3 class="heading">Our Services</h3>
      </div>
        <p class="heading-bottom-para">
            Centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in 2007
            with the release of Letraset
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
