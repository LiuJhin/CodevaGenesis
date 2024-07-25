// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/style.scss"],
  modules: ['@pinia/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) =>
          // @ts-ignore
          config.plugins.push(
              vuetify({
                styles: { configFile: resolve("/assets/scss/variables.scss") },
              })
          )
      );
    },],
    build: {
        transpile: ['gsap'],
    },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-23",
})
