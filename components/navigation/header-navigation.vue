<template>
    <div class="navigation">
        <ul class="list">
    <li class="item" v-for="(item, index) in navigationList" :key="index">
        <nuxt-link class="item-link" :to="item.link"><span class="name"> {{ item.name }}</span></nuxt-link>
        
    </li>
</ul>
    </div>
</template>

<script setup>

const navigationList = [{name:"Home", link:'/'}, {name:"About", link:'/about'}, {name:"Projects", link:'/projects'}]

</script>

<style lang="scss" scoped>
.navigation {
    .list {
    list-style: none;
    display: flex;
    flex-direction: row;
    font-family: $font-family;
    font-size: 35px;
    @include items-spacing("horizontal", 20px);
    }
    .item-link {
        text-decoration: none;
        color: inherit;
        transition: color 0.2s ease-in;
        &:hover {
            cursor: pointer;
            color: $hover-color;
        }

    }
}


</style>