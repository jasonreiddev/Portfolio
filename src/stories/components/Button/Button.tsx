import React from "react"
import { ButtonStyles as s, ButtonStylesProps } from "./Button.styles"

export interface ButtonProps extends ButtonStylesProps {
  text: string
  onClick?: () => void
  href: string
  id: string
}

export const Button = ({
  primary = false,
  size = "medium",
  // When on card w/ reversed background color
  reversed,
  text,
  ...props
}: ButtonProps) => {
  return (
    <s.Button
      primary={primary}
      size={size}
      reversed={reversed}
      type="button"
      {...props}
    >
      {text}
    </s.Button>
  )
}
