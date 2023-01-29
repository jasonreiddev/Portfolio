import React from "react"
import { GatsbyImage, GatsbyImageProps, getImage } from "gatsby-plugin-image"
import { ButtonStylesProps, IconStyles as s } from "./Icon.styles"

interface IconProps extends GatsbyImageProps {
  size?: ButtonStylesProps["size"]
}

export const Icon = ({ alt, image, size = "medium" }: IconProps) => {
  return (
    <s.Wrapper size={size}>
      <GatsbyImage alt={alt} image={getImage(image)} />
    </s.Wrapper>
  )
}
