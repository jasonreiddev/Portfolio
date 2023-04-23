import { resolve } from "path"
const nodeModules = __dirname + "../node_modules/"

module.exports = {
  stories: ["../src/stories/*/*/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // Gatsby - Remove core-js, and un-transpiled ES6 code.
    config.module.rules[0].exclude = [
      resolve(nodeModules, "gatsby"),
      resolve(nodeModules, "gatsby-script"),
      resolve(nodeModules, "core-js"),
    ]

    // Gatsby - Prefer ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"]

    // Set custom loaders
    config.module.rules.push({
      include: resolve(__dirname, "../src"),
      exclude: resolve(nodeModules),
      test: /\.(js|jsx|ts|tsx)$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            plugins: [require.resolve("babel-plugin-remove-graphql-queries")],
          },
        },
        {
          loader: "@linaria/webpack-loader",
          options: {
            sourceMap: true,
            babelOptions: {
              presets: ["@babel/preset-typescript", "@babel/preset-react"],
            },
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

  docs: {
    autodocs: true,
  },
}
