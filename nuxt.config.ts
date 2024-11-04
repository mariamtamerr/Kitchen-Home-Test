import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@samk-dev/nuxt-vcalendar'
  ],

  devtools: { enabled: true }
});
