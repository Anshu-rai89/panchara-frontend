<template>
  <div
        class="section section-dark flex"
        style="justify-content: center"
        id="contact-us"
  >
      <div class="about-wrapper" style="max-width: 88rem;">

        <div class="flex-1 align-center justify-center">
            <div class="heading-container">
                <h3 class="heading">Contact Us</h3>
            </div>
            <p class="heading-bottom-para">
                If you wish to connect to us or want to learn more about
                us, we would be glad to hear from you...
            </p>

            <form class="form" id="contact-form">
                <div class="form-group">
                    <input
                        class="input"
                        id="name"
                        placeholder="Full Name"
                    />
                </div>

                <div class="form-group">
                    <input
                        class="input"
                        id="email"
                        placeholder="Email Id"
                    />
                </div>

                <div class="form-group">
                    <input
                        class="input"
                        id="mobile"
                        placeholder="Mobile No."
                    />
                </div>

                <div class="form-group">
                    <textarea
                        class="input textarea"
                        id="message"
                        placeholder="Write a message..."
                    />
                </div>

                <button class="button">
                    Submit
                </button>
            </form>

            <div class="contact-details">
                <div class="item">
                    <img class="icon" src="@/assets/images/png/phone.png" />
                    <a class="a" href="tel:914029702989">91-40-29702989</a>
                </div>
                <div class="item">
                    <img class="icon" src="@/assets/images/png/email.png" />
                    <a class="a" href="mailto:hello@panchahara.com">hello@panchahara.com</a>
                </div>
            </div>
        </div>
        <div class="flex flex-1 align-center justify-center column hide-small">
            <div class="img-container">
                <img class="img-1" src="@/assets/images/png/contact-1.png" />
                <img class="img-2" src="@/assets/images/png/contact-2.png" />
            </div>
        </div>
      </div>
  </div>

</template>

<style scoped lang="scss">

@import "@/styles/variables";

.img-container {
    position: relative;
    padding: 1rem 3rem;

    .img-1 {
        width: 100%;
    }

    .img-2 {
        position: absolute;
        width: 50%;
        left: -13%;
        top: 28%;
    }
}
.contact-details {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .item {
        display: flex;
        align-items: center;
        font-family: $body-bold;
        margin-right: 2rem;
        font-size: 1.2rem;
    }

    .icon {
        width: 1.5rem;
        margin-right: 1rem;
    }

    .a {
        text-decoration: none;
        color: #006831;
    }
}

</style>

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
