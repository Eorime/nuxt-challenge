// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/sass/app.scss";',
        },
      },
    },
  },
  build: {
    transpile: ["gsap"],
  },
};
