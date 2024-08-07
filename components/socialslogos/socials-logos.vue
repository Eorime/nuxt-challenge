<template>
  <div class="socialsLogosDiv">
    <img class="logoImage" src="../../assets/images/otherlogos/linkedin.png" />
    <img class="logoImage" src="../../assets/images/otherlogos/github.png" />
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
