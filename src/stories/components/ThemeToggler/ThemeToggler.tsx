import React from "react"
import { ThemeToggler as GatsbyThemeToggler } from "gatsby-plugin-dark-mode"
import { ThemeTogglerStyles as s } from "./ThemeToggler.styles"
import { Moon, Sun } from "react-feather"

export const ThemeToggler = () => {
  return (
    <GatsbyThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <s.Button
            onClick={() => {
              console.log(theme)
              toggleTheme(theme == "dark" ? "light" : "dark")
            }}
          >
            <Moon className="display-dark" />
            <Sun className="hide-dark" />
          </s.Button>
        </label>
      )}
    </GatsbyThemeToggler>
  )
}
