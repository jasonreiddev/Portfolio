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
  card,
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
    <s.MotionWrapper
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={primary && { scale: 1.05 }}
      whileTap={primary ? { scale: 1.025 } : { scale: 0.975 }}
    >
      <s.Button
        primary={primary}
        size={size}
        card={card}
        type="button"
        id={`${idPrefix}-${id}`}
        onClick={onClick}
      >
        {text}
      </s.Button>
    </s.MotionWrapper>
  )
}
