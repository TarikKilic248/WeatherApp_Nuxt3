// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      weatherApiKey:
        process.env.WEATHER_API_KEY || '7e7b26cd438f40c480f85449250803',
    },
  },
});
