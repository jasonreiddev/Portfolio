require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  trailingSlash: "always",
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
        icon: "src/favicon.png",
        /* Required for gatsby-plugin-offline */
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          /* Required for gatsby-plugin-manifest */
          globPatterns: [
            "**/*{.js,.json,.webp,.webmanifest,.woff,.woff2,.ttf,.eot,.css,.mjs,.svg,.mp3,icons/icon*,.ico}",
          ],
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: `NetworkFirst`,
            },
            {
              urlPattern:
                /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              // Google Fonts CSS
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `StaleWhileRevalidate`,
            },
          ],
        },
        precachePages: ["/", "/about/"],
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
    "gatsby-plugin-provide-react",
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
