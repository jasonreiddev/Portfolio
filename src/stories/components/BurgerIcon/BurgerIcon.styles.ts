import { styled } from "@linaria/react"

export interface BurgerIconStylesProps {
  size: "small" | "medium" | "large"
  card: boolean
}

const BurgerWrapper = styled("span")<BurgerIconStylesProps>`
  width: fit-content;
  svg {
    width: ${(p: BurgerIconStylesProps) => {
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
    overflow: visible;
    cursor: pointer;
    line {
      stroke: ${(p: BurgerIconStylesProps) => {
        return p.card ? `var(--color-card-text)` : `var(--color-text)`
      }};
      stroke-width: 32px;
    }

    :hover line {
      stroke: ${(p: BurgerIconStylesProps) => {
        return p.card ? `var(--color-card-active)` : `var(--color-active)`
      }};
    }
  }
`

export const BurgerIconStyles = {
  BurgerWrapper,
}
