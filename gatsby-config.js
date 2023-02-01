require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://jasonreid.dev/",
    title: "Jason Reid's Development Portfolio",
    author: "Jason Reid",
    description: "My software development portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jason Reid's Development Portfolio",
        short_name: "JR Dev Portfolio",
        start_url: "/",
        background_color: "#41d9c5",
        theme_color: "#231f20",
        display: "standalone",
        icon: "src/brand-logo.png",
        icon_options: {
          // For all the options available,
          purpose: `any maskable`,
        },
        /* Required for gatsby-plugin-offline */
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          /* Required for gatsby-plugin-manifest */
          globPatterns: ["**/brand-logo*"],
        },
      },
    },
    {
      resolve: "@kontent-ai/gatsby-source",
      options: {
        projectId: process.env.KONTENT_PROJECT_ID,
        languageCodenames: ["en-US"],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // default: false
        jsxPragma: "React", // default
        allExtensions: true, // default: false
      },
    },
    {
      resolve: "gatsby-plugin-linaria",
      options: {
        loaderOptions: {
          extractCritical: true, //  default: false
        },
      },
    },
  ],
}
