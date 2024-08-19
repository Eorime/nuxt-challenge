export const formDataStore = defineStore("formData", {
  state: () => ({
    formArray: [
      {
        name: null,
      },
      {
        surname: null,
      },
      {
        email: null,
      },
    ],
  }),
  actions: {
    pushInputData(input) {
      this.formArray.forEach((item) => {
        const key = Object.keys(item)[0];
        //aqedan obieqtis itemis keyebs vigebt, kerdzod pirvels cuz index 0 gvaqvs mititebuli
        const value = item[key];
        //amit vigebt keystan asocirebul values
        if (value !== null && value !== "") {
          if (key in input && input[key] !== null && input[key] !== "") {
            item[key] = input[key];
            //amit mxolod im shemtxvevashi vaupdatebt, tu cariels ar vigebt
          }
        }
      });
      //gamape array da check titoeuli input carieli tua, tu araa carieli shemopushe arrayshi shesabamis objectshi
    },
  },
});
