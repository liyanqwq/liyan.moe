// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://liyan.moe",
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["zh", "en", "yue"],
    defaultLocale: "zh",
    routing: {
      prefixDefaultLocale: false
    }
  },
  experimental: {
    fonts: [
      {
        name: "Google Sans Code",
        cssVariable: "--font-google-sans-code",
        provider: fontProviders.google(),
        fallbacks: ["monospace"],
        weights: [300, 400, 500, 600, 700],
        styles: ["normal", "italic"],
      },
      {
        name: "LXGW WenKai TC",
        cssVariable: "--font-lxgw-wenkai-tc",
        provider: fontProviders.google(),
        fallbacks: ["Google Sans Code", "Noto Sans"],
        weights: [300, 400, 700],
        styles: ["normal"],
        // display: "block",
      }
    ],
  },
});