// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  tres: { devtools: true },
  modules: [
    "@nuxt/eslint",
    "@formkit/auto-animate",
    "@nuxt/icon",
    "@nuxt/fonts",
    "nuxt-swiper",
    "@vueuse/nuxt",
    "@tresjs/nuxt",
    "@nuxthub/core",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  typescript: {
    typeCheck: true,
  },
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "model",
        path: "/model",
        file: "~/pages/index.vue",
      });
    },
  },
});
