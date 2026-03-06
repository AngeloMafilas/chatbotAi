// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-04',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['node']
      }
    }
  }
})