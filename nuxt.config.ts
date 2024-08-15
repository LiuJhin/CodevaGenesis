// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/style.scss"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  build: {
    transpile: ["gsap"],
  },
  i18n: {
    strategy: "prefix_and_default", // 添加路由前缀的方式
    locales: ["en", "zh"], //配置语种
    defaultLocale: "en", // 默认语种
    vueI18n: "./i18n.config.ts", // 通过vueI18n配置
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-23",
});
