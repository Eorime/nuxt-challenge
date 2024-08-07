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
