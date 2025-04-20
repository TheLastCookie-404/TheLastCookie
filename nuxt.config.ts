// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  tres: { devtools: true },
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@formkit/auto-animate",
    "@nuxt/icon",
    "@nuxt/fonts",
    "nuxt-swiper",
    "@vueuse/nuxt",
    "@tresjs/nuxt",
    "@nuxthub/core",
  ],
  alias: { pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs" },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  typescript: {
    typeCheck: true,
  },
});
