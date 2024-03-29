import { styled } from "@linaria/react"
import { motion } from "framer-motion"

export interface ButtonStylesProps {
  primary: boolean
  size: "small" | "medium" | "large"
  card?: boolean
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
  text-decoration: none;
  /* Matches background animation */
  transition: background-color 0.2s ease-out;

  background-color: ${(p: ButtonStylesProps) => {
    if (p.card) {
      return p.primary
        ? `var(--color-card-text)`
        : `var(--color-card-background)`
    }

    return p.primary ? `var(--color-text)` : `var(--color-background)`
  }};

  color: ${(p: ButtonStylesProps) => {
    if (p.card) {
      if (p.size !== "large") {
        return p.primary ? `var(--color-black)` : `var(--color-white)`
      }

      return p.primary
        ? `var(--color-card-background)`
        : `var(--color-card-text)`
    }

    return p.primary ? `var(--color-background)` : `var(--color-text)`
  }};

  box-shadow: ${(p: ButtonStylesProps) => {
    if (p.card) {
      if (p.size !== "large") {
        return p.primary ? null : `inset 0 0 0 2px var(--color-white)`
      }

      return p.primary ? null : `inset 0 0 0 2px var(--color-card-text)`
    }

    return p.primary ? null : `inset 0 0 0 2px var(--color-text)`
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
      if (p.card) {
        return p.primary
          ? `var(--color-card-active)`
          : `var(--color-card-muted)`
      }
      return p.primary ? `var(--color-active)` : `var(--color-muted)`
    }};
  }
`

export const ButtonStyles = {
  MotionWrapper,
  Button,
}
