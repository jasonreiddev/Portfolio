export { GlobalStyles } from "../src/shared/global.styles"

// Gatsby's Link overrides:
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__BASE_PATH__ = "/"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    stylePreview: true,
    classTarget: "body",
  },
  backgrounds: {
    default: "background",
    values: [{ name: "background", value: "var(--color-background)" }],
  },
}
