import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // See: https://github.com/nuxt/framework/issues/2627
  alias: {
    yup: "yup/lib/index.js",
  },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
