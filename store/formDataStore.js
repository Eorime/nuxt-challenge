export const formDataStore = defineStore("formData", {
  state: () => ({
    formArray: [],
  }),
  actions: {
    pushInputData(input) {
      this.formArray.push(input);
    },
  },
});
