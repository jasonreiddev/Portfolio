import React from "react"
import { GlobalStyles } from "../src/global.styles"

// Gatsby's Link overrides:
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__BASE_PATH__ = "/"

window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname)
}

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
