module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  babel: async (options) => ({
    ...options,
    presets: ["@babel/preset-env", "@babel/preset-react", "@linaria"],
  }),
}
