const React = require("react")
const path = require("path")

module.exports = {
  stories: [
    "../src/stories/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "storybook-addon-gatsby",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: async (config) => {
    // Transpile modules with un-transpiled ES6 code.
    config.module.rules[0].exclude = [
      /node_modules\/(?!(gatsby|gatsby-script)\/)/,
    ]

    // Remove core-js
    config.module.rules[0].exclude = [/core-js/]

    // Remove static graphQL queries from components
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries"),
      require.resolve("babel-plugin-react-require")
    )

    // Gatsby - Prefer ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"]

    // Set custom loaders
    config.module.rules.push({
      include: path.resolve(__dirname, "../src"),
      exclude: path.resolve(__dirname, "../node_modules"),
      test: /\.(js|jsx|ts|tsx)$/,
      use: [
        {
          loader: "babel-loader",
        },
        {
          loader: "@linaria/webpack-loader",
          options: {
            sourceMap: true,
          },
        },
        {
          loader: "ts-loader",
        },
      ],
    })

    config.resolve.extensions.push(".ts", ".tsx")

    return config
  },

  babel: async (options) => ({
    ...options,
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@linaria/babel-preset",
    ],
  }),
}
