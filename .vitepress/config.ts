import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chat Cache | For ChatGPT",
  description: "Keep your prompts cached locally.",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "docs", link: "/docs" },
    ],
    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Getting Started", link: "/docs/getting-started" }],
      },
      {
        text: "Policies",
        items: [{ text: "Privacy Policy", link: "/docs/privacy-policy" }],
      },
      {
        text: "Feedback",
        items: [{ text: "Feedback Form", link: "/docs/feedback-form" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/aaronliu2016/chat-cache-docs",
      },
    ],

    footer: {
      message:
        "Build with love by <a href='https://aarontalk.com'>Aaron Liu</a>",
      copyright: "Copyright © 2024 | All Rights Reserved.",
    },
  },
});
