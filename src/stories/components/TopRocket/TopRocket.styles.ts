import { styled } from "@linaria/react"

export interface TopRocketStylesProps {
  size: "small" | "medium" | "large"
  card: boolean
}

const TopRocketWrapper = styled("span")<TopRocketStylesProps>`
  position: fixed;
  right: 20px;
  bottom: 24px;
  width: fit-content;

  div {
    width: ${(p: TopRocketStylesProps) => {
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

    svg {
      transform: scale(1.2);
    }

    & > svg {
      width: 100%;
      height: auto;
      cursor: pointer;

      fill: ${(p: TopRocketStylesProps) => {
        return p.card ? `var(--color-card-text)` : `var(--color-text)`
      }};

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          fill: ${(p: TopRocketStylesProps) => {
            return p.card ? `var(--color-card-active)` : `var(--color-active)`
          }};
        }
      }
    }

    span > svg {
      transform: rotate(180deg) translateY(20%);
      width: 100%;
      height: auto;

      stroke: ${(p: TopRocketStylesProps) => {
        return p.card ? `var(--color-card-text)` : `var(--color-text)`
      }};
    }
  }
`

export const TopRocketStyles = {
  TopRocketWrapper,
}
