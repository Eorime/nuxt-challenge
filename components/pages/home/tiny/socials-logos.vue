<template>
  <div class="socialsLogosDiv">
    <ul class="logos-list">
      <li v-for="(item, index) in socialLogos" :key="index" class="logoImage">
        <nuxt-link :class="item.name" :to="item.link" target="_blank">
          <nuxt-icon :name="item.name" class="nuxt-icon" filled />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const socialLogos = [
  {
    name: "linkedin",
    imgageSrc: "/images/otherlogos/linkedin.png",
    link: "https://www.linkedin.com/in/elene-dgebuadze-008617258/",
  },
  {
    name: "github",
    imgageSrc: "/images/otherlogos/github.png",
    link: "https://github.com/eorime",
  },
];
</script>

<style lang="scss" scoped>
.logos-list {
  margin-top: 10px;
  @include items-spacing("horizontal", 2px);

  .logoImage {
    margin-right: 11px;
    opacity: 1;

    &:hover {
      cursor: pointer;
      --path-fill: #c88080;
    }
  }
  :deep(.nuxt-icon) {
    --nuxt-size: 30px;

    width: var(--nuxt-size);
    height: var(--nuxt-size);
    svg {
      width: inherit;
      height: inherit;
    }
    path {
      fill: var(--path-fill, #000);
      transition: fill 0.3s ease-in;
    }
  }
}
</style>
