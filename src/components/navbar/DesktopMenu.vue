<template>
    <div class="wrapper flex align-center justify-flex-start flex-2 desktop align-self-stretch">
        <div class="menu-container align-self-stretch">
            <ul class="ul flex">
                <li
                    class="li flex"
                    v-for="(item, key) in navlinks"
                    :key="item.title+key"
                    @click="clickEvent(item.link)"
                >
                    <router-link class="link" :to="item.link" :exact="item.link=='/'">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import navlinks from "./data";

export default {
    name: "DesktopMenu",
    data() {
        return { navlinks };
    },
    props: {
        clickEvent: Function,
    },
};
</script>
