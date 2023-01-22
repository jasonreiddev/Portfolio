import React from "react"
import { HeadingStyles as s } from "./Heading.styles"

export interface ButtonProps {
  title: string
  kicker: string
}

export const Heading = ({ title, kicker }: ButtonProps) => {
  return (
    <s.Container>
      {kicker && <s.Kicker>{kicker}</s.Kicker>}
      {title}
    </s.Container>
  )
}
