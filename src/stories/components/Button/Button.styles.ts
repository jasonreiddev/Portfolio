import { styled } from "@linaria/react"
import { motion } from "framer-motion"

export interface ButtonStylesProps {
  primary: boolean
  size: "small" | "medium" | "large"
  reversed: boolean
}

const MotionWrapper = styled(motion.div)`
  width: fit-content;
`

const Button = styled.button<ButtonStylesProps>`
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  border: 0;
  font-family: var(--font-text);
  /* Matches background animation */
  transition: background-color 0.2s ease-out;

  background-color: ${(p: ButtonStylesProps) => {
    if (p.reversed) {
      return p.primary ? `var(--color-background)` : `var(--color-primary)`
    }

    return p.primary ? `var(--color-text)` : `var(--color-background)`
  }};

  color: ${(p: ButtonStylesProps) => {
    if (p.reversed) {
      return p.primary ? `var(--color-text)` : `var(--color-background)`
    }

    return p.primary ? `var(--color-background)` : `var(--color-text)`
  }};

  font-size: ${(p: ButtonStylesProps) => {
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

  &:hover {
    /* Only transition on hover on and theme change */
    transition: none;
    background-color: ${(p: ButtonStylesProps) => {
      if (p.reversed) {
        return p.primary ? `var(--color-active)` : `var(--color-background)`
      }
      return p.primary ? `var(--color-active)` : `var(--color-muted)`
    }};

    color: ${(p: ButtonStylesProps) => {
      return p.primary ? `var(--color-background)` : `var(--color-text)`
    }};
  }
`

export const ButtonStyles = {
  MotionWrapper,
  Button,
}
