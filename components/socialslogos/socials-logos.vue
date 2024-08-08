<template>
  <div class="socialsLogosDiv">
    <nuxt-link
      class="logoImage1"
      to="https://www.linkedin.com/in/elene-dgebuadze-008617258/"
      target="_blank"
    >
      <img
        class="logoImage"
        src="../../assets/images/otherlogos/linkedin.png"
      />
    </nuxt-link>
    <nuxt-link class="logoImage2" to="https://github.com/eorime" target="_blank"
      ><img class="logoImage" src="../../assets/images/otherlogos/github.png"
    /></nuxt-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.socialsLogosDiv {
  display: flex;
  flex-direction: row;

  .logoImage {
    margin-right: 11px;
    margin-top: -20px;
    opacity: 1;
    transition: opacity 0.3s ease-in;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}
</style>
