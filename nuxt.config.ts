// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/ui",
  ],
  runtimeConfig: {
    public: {
      weatherApiKey: process.env.WEATHER_API_KEY,
      geminiApiKey: process.env.GEMINI_API_KEY,
    },
  },
  colorMode: {
    classSuffix: "",
  },
});
