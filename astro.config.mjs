import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [tailwind()],
  output: "server",
  adapter: node({
    mode: "middleware",
  }),
});
