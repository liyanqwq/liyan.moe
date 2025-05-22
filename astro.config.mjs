// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["zh", "en", "yue"],
    defaultLocale: "zh",
    routing: {
      prefixDefaultLocale: false
    }
  }
});