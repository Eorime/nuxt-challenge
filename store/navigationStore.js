export const navigationStore = defineStore("navElements", {
  state: () => ({
    pageName: null,
  }),
  actions: {
    changeButton(pathName) {
      this.pageName = pathName;
    },
  },
});

//define a store with globally accessible variables and methods
