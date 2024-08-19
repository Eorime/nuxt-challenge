<template>
  <div class="form-div">
    <h1 class="form-header">Get In Touch</h1>
    <form class="form" @submit.prevent="checkInput">
      <input
        v-for="(input, index) in inputs"
        :key="index"
        :class="[
          'form-input',
          {
            'is-empty': hasBeenSubmitted && !formData[input.name],
          },
        ]"
        :placeholder="input.placeHolder"
        :type="input.type"
        v-model="formData[input.name]"
      />
      <button class="form-button" type="submit">
        <span class="button-text">Send Info</span>
        <client-only>
          <nuxt-icon name="arrow" class="nuxt-arrow" filled />
        </client-only>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { formDataStore } from "~/store/formDataStore";

const formDataInfo = formDataStore();

const inputs = [
  {
    name: "name",
    placeHolder: "Name",
    type: "text",
  },
  {
    name: "surname",
    placeHolder: "Surname",
    type: "text",
  },
  {
    name: "email",
    placeHolder: "Email",
    type: "email",
  },
];

const formData = ref({
  name: "",
  surname: "",
  email: "",
});

const hasBeenSubmitted = ref(false);

function checkInput() {
  hasBeenSubmitted.value = true;

  const isFormValid = Object.values(formData.value).every(
    (value) => value.trim() !== ""
  );

  if (isFormValid) formDataInfo.pushInputData(formData.value);

  console.log(formDataInfo.formArray, formData.value);
}
</script>

<style lang="scss" scoped>
.form-div {
  display: flex;
  gap: 300px;
  margin-left: 160px;
  margin-top: 100px;

  .form-header {
    font-family: $font-family;
    font-size: 90px;
    font-weight: bold;
    margin-top: 300px;
  }

  .form {
    display: flex;
    margin-top: 280px;
    flex-direction: column;
    @include items-spacing("vertical", 70px);
  }

  .form-input {
    font-size: 64px;
    border-bottom: solid 1px black;
    width: 733px;
    height: 125px;
    transition: border-color 0.3s ease;

    &.is-empty {
      border-bottom: solid 3px red;
    }
  }

  .form-button {
    display: flex;
    justify-content: space-between;
    width: 733px;
    font-size: 64px;
    padding: 30px;
    height: auto;
    background-color: #c88080;
    border-radius: var(--border-var, 10px);
    text-align: left;
    color: $background-color;
    cursor: pointer;

    &:hover {
      transition: 0.3s ease-in;
      background-color: #e3a6a6;
      color: white;
      --border-var: 0px;
      --path-fill: white;
      --transform-arrow: translate(15px);
    }

    :deep(.nuxt-arrow) {
      width: 125px;

      svg {
        width: inherit;
      }

      path {
        fill: var(--path-fill, $background-color);
        transition: fill 0.3s ease-in, transform 0.3s ease-in;
        transform: var(--transform-arrow, translate(0px));
      }
    }
  }
}
</style>
