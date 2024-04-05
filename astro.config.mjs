import { defineConfig } from "astro/config"
import ClassyLight from "./classy-light.json"
import markdownIntegration from "@astropub/md"
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: "https://zphrs.github.io",
  base: "/cse110a-notes",
  integrations: [markdownIntegration(), mdx()],
  markdown: {
    shikiConfig: {
      theme: ClassyLight,
    },
  },
})
