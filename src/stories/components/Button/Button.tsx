import React from "react"
import { ButtonStyles as s, ButtonStylesProps } from "./Button.styles"

export interface ButtonProps extends ButtonStylesProps {
  text: string
  onClick?: () => void
  href: string
  idPrefix: string
  id: string
}

export const Button = ({
  text,
  idPrefix,
  id,
  primary = false,
  size = "medium",
  // When on card w/ reversed background color
  reversed,
}: ButtonProps) => {
  return (
    <s.Button
      primary={primary}
      size={size}
      reversed={reversed}
      type="button"
      id={`${idPrefix}-${id}`}
    >
      {text}
    </s.Button>
  )
}
