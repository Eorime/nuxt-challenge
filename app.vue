<template>
  <NuxtLayout>
    <common-header />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { navigationStore } from "~/store/navigationStore";

const route = useRoute();
const navigationData = navigationStore();

watch(
  () => route.path,
  (current, prev) => {
    navigationData.changeButton(current);
  }
);

const giveClass = () => {
  document.body.classList.add("is-loaded");
};

onMounted(() => {
  navigationData.changeButton(route.path);
  giveClass();

  //Change up the button from the get go
});
</script>

<style lang="scss">
body {
  background-color: #dddddd;
}
</style>
