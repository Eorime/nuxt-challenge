<template>
  <div class="skill-logos">
    <ul class="skill-logos-list">
      <li v-for="(item, index) in skills" :key="index" class="skill-logo">
        <client-only>
          <nuxt-icon :name="item.name" class="nuxt-icon" filled />
        </client-only>
      </li>
    </ul>
  </div>
</template>

<script setup>
const skills = [
  { name: "css" },
  { name: "javascript" },
  { name: "html" },
  { name: "nuxt" },
];
</script>

<style lang="scss" scoped>
.skill-logos-list {
  margin-top: 50px;
  @include items-spacing("horizontal", 40px);

  .skill-logo {
    cursor: pointer;
    &:hover {
      --path-fill: #c88080;
    }

    :deep(.nuxt-icon) {
      --nuxt-size: 90px;

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
}
</style>
