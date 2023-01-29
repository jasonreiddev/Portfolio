import { styled } from "@linaria/react"
import { GatsbyImage } from "gatsby-plugin-image"

export interface ButtonStylesProps {
  size: "small" | "medium" | "large"
}

const Wrapper = styled("div")<ButtonStylesProps>`
  padding: ${(p: ButtonStylesProps) => {
    switch (p.size) {
      case "small": {
        return `
        12px
        `
      }
      case "medium": {
        return `
        16px`
      }
      case "large": {
        return `
        20px`
      }
    }
  }};
`

export const IconStyles = {
  Wrapper,
}
