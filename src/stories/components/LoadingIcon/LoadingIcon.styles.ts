import { styled } from "@linaria/react"

export interface LoadingIconStylesProps {
  size: "small" | "medium" | "large"
  card: boolean
}

const LoadingWrapper = styled("span")<LoadingIconStylesProps>`
  display: grid;
  align-items: center;
  justify-items: center;

  span {
    grid-area: 1 / 1;
    display: block;
    width: ${(p: LoadingIconStylesProps) => {
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
    aspect-ratio: 1 / 1;
    overflow: visible;
    background-color: ${(p: LoadingIconStylesProps) => {
      return p.card ? `var(--color-card-text)` : `var(--color-text)`
    }};
    border-radius: 50%;
  }
`

export const LoadingIconStyles = {
  LoadingWrapper,
}
