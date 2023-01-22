import React from "react"
import { GlobalStyles } from "../src/global.styles"

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
