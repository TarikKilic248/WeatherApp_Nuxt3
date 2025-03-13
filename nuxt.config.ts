// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
<<<<<<< HEAD
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/color-mode", "@nuxt/ui"],
  runtimeConfig: {
    public: {
      weatherApiKey:
        process.env.WEATHER_API_KEY || "7e7b26cd438f40c480f85449250803",
      geminiApiKey:
        process.env.GEMINI_API_KEY || "AIzaSyC3p2yzwqWPF9miylAoGC0FvQC5PhZLtjo",
    },
  },
  colorMode: {
    classSuffix: "",
  },
});
=======
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
>>>>>>> bc6a15e8a7d9d351254486045a7acbeed5289e00
