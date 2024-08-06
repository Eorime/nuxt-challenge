<template>
    <div class="navigation">
<ul class="list">
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
</ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.list {
    list-style: none;
    display: flex;
    flex-direction: row;
    font-family: $font-family;
    font-size: 35px;
    @include items-spacing("horizontal", 20px);
}
</style>