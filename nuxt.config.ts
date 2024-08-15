// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/style.scss"],
  modules: ['@pinia/nuxt',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/i18n'
    ],
    build: {
        transpile: ['gsap'],
    },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-23",
})