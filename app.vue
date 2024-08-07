<template>
  <div id="app">
    <NuxtPage />
  </div>
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

onMounted(() => {
  navigationData.changeButton(route.path);
});
</script>

<style lang="scss">
body {
  background-color: #dddddd;
}
</style>
