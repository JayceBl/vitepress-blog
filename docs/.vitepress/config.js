import { defineConfig } from "vitepress";

export default defineConfig({
  base: '/vitepress-blog/',
  title: "My Awesome Blog",
  description: "A VitePress Site",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [{}],

    search: {
      provider: "local",
    },
  },
});
