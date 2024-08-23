//import { defineConfig } from "astro/config";

//export default defineConfig({
//  site: "https://blog.kylelaverty.ca",
//});

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://blog.kylelaverty.ca",
  integrations: [mdx(), sitemap(), tailwind()],
});
