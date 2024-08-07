// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2024-04-03',
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
  build:{
    transpile: ['gsap']
  }
}
