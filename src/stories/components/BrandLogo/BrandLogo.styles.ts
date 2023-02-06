import { styled } from "@linaria/react"
import { motion } from "framer-motion"

export interface BrandLogoStylesProps {
  size: "small" | "medium" | "large"
  card: boolean
}

const LogoWrapper = styled("span")<BrandLogoStylesProps>`
  width: fit-content;
  svg {
    width: ${(p: BrandLogoStylesProps) => {
      switch (p.size) {
        case "small": {
          return `
        18px
        `
        }
        case "medium": {
          return `
        24px`
        }
        case "large": {
          return `
        48px`
        }
      }
    }};

    path {
      stroke: ${(p: BrandLogoStylesProps) => {
        return p.card ? `var(--color-card-text)` : `var(--color-text)`
      }};
    }

    :hover #JR-Active path {
      stroke: ${(p: BrandLogoStylesProps) => {
        return p.card ? `var(--color-card-active)` : `var(--color-active)`
      }};
    }
  }
`

export const BrandLogoStyles = {
  LogoWrapper,
}
