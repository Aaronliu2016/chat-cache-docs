import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chat Cache",
  description: "Keep your prompts cached locally.",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }], 
    ["script", {
      src: "https://www.googletagmanager.com/gtag/js?id=G-WWGS2YXFLH",
      async: "true"
    }],
    ["script", {}, 
    `window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-WWGS2YXFLH');` 
    
  ]
  ],
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
      {
        text: "About",
        items: [{ text: "Release Notes", link: "/docs/release" }],
      }
    ],

    socialLinks: [
      {
        icon: "twitter",
        link: "https://twitter.com/Aarontalkdotcom",
      },
    ],

    footer: {
      message:
        "Build with love by <a href='https://aarontalk.com'>Aaron Liu</a>",
      copyright: "Copyright © 2024 | All Rights Reserved.",
    },
  },
});
