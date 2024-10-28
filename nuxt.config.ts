// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  srcDir: './src',
  typescript: {
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  eslint: {
    
  }
});