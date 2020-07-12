<template>
  <div
       :class="{ 'active' : isOpen , 'menu': true}"
       @click="toggle">
    <span>{{ menuTitle }}</span>
      <button type="button" :class="{'burger-button': true, 'open': isOpen }" title="Menu">
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
  </div>
</template>

<script>
export default {
    name: "Ham",
    props: {
        isOpen: Boolean,
        toggle: Function,
        menuTitle: String,
    },
};
</script>
