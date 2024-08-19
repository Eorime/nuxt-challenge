<template>
  <div class="gig-task">
    <pages-gig-button
      backgroundColor="white"
      backgroundOpacity
      buttonBackgroundColor="white"
    />
    <pages-gig-button backgroundColor="white" buttonBackgroundColor="red" />
    <pages-gig-button
      buttonBackgroundColor="black"
      buttonColor="white"
      :rotate="true"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.gig-task {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
