<template>
  <div class="main-page">
    <common-header />
    <pages-home-tiny-header-text />
    <pages-home-socials-wrapper />
    <mainimage-main-image />
  </div>
</template>

<script setup>
import gsap from "gsap";

const giveClass = () => {
  document.body.classList.add("is-loaded");
};

const animation = () => {
  gsap
    .timeline()
    .from(".logo", {
      duration: 1,
      opacity: 0,
    })
    .from(".navigation", {
      duration: 1,
      opacity: 0,
    })
    .from(".headerText", {
      duration: 1,
      opacity: 0,
    })
    .from(".socialsText", {
      duration: 1,
      opacity: 0,
    })
    .from(".logoImage1", {
      duration: 1,
      opacity: 0,
    })
    .from(".logoImage2", {
      duration: 1,
      opacity: 0,
    })
    .from(".mainImageDiv", {
      duration: 1,
      opacity: 0,
    });
};

onMounted(() => {
  giveClass();
  animation();
});
</script>

<style lang="scss" scoped></style>
