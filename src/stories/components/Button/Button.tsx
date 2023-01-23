import React from "react"
import { navigate } from "gatsby"
import { ButtonStyles as s, ButtonStylesProps } from "./Button.styles"

export interface ButtonProps extends ButtonStylesProps {
  text: string
  onClick?: () => void
  href?: string
  idPrefix: string
  id: string
}

const externalLink = new RegExp("^(https?://|mailto:)", "i")

export const Button = ({
  text,
  onClick,
  href,
  idPrefix,
  id,
  primary = false,
  size = "medium",
  // When on card w/ reversed background color
  reversed,
}: ButtonProps) => {
  if (!onClick && href) {
    if (externalLink.test(href)) {
      onClick = () => {
        window.location.href = href
      }
    } else {
      onClick = () => {
        navigate("/page")
      }
    }
  }

  return (
    <s.Button
      primary={primary}
      size={size}
      reversed={reversed}
      type="button"
      id={`${idPrefix}-${id}`}
      onClick={onClick}
    >
      {text}
    </s.Button>
  )
}
