<template>
  <div class="gig-button">
    <div
      :class="[
        'main-bar',
        backgroundColor,
        {
          'has-opacity': backgroundOpacity,
          'no-background': !backgroundColor,
        },
      ]"
    >
      <p class="bar-text">Learn More</p>
      <button
        :class="[
          'bar-btn',
          buttonBackgroundColor,
          buttonColor,
          {
            'has-rotation': rotate,
          },
        ]"
      >
        <client-only>
          <nuxt-icon name="arrow" class="nuxt-arrow" filled />
        </client-only>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  backgroundColor: {
    type: String,
  },
  backgroundOpacity: {
    type: Boolean,
  },
  buttonBackgroundColor: {
    type: String,
  },
  buttonColor: {
    type: String,
  },
  rotate: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.gig-button {
  .main-bar {
    position: relative;
    margin-left: 200px;
    width: 496px;
    height: 80px;
    border-radius: 32px 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 12px;
    overflow: hidden;
    border: var(--main-bar-border);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      opacity: var(--main-bar-opacity, 1);
      background-color: var(--main-bar-background, transparent);
      z-index: -1;
    }
    &.white {
      --main-bar-background: #fff;
    }
    &.has-opacity {
      --main-bar-opacity: 0.2;
    }
    &.no-background {
      --main-bar-border: 1px solid black;
    }

    .bar-text {
      font-size: 24px;
      color: #0c2a24;
      font-family: sans-serif;
    }
    .bar-btn {
      background-color: var(--button-background-color);
      border-radius: 50% 0 50% 50%;
      width: 55px;
      height: 55px;
      font-size: 18px;
      color: var(--button-color);
      transform: var(--button-rotation);

      &.white {
        --button-background-color: #fff;
        --button-color: #f90b0b;
      }

      &.red {
        --button-background-color: #f90b0b;
        --button-color: #fff;
      }

      &.black {
        --button-background-color: #000000;
        --button-color: #ffffff;
      }

      &.has-rotation {
        --button-rotation: rotate(90deg);
      }

      :deep(.nuxt-arrow) {
        width: 25px;
        height: 16px;

        svg {
          width: inherit;
          height: inherit;
        }

        path {
          fill: var(--button-color);
        }
      }
    }
  }
}
</style>

<!--propsebad: tviton baris degree or mxares, background color, background opacity, font color, buttonis isris feri, buttonis fill, buttonis 
  rotation degree-->
