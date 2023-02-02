import React from "react"
import { GatsbyImage, GatsbyImageProps, getImage } from "gatsby-plugin-image"
import { IconStylesProps, IconStyles as s } from "./Icon.styles"

export interface IconProps extends GatsbyImageProps {
  size?: IconStylesProps["size"]
}

export const Icon = ({ alt, image, size = "medium" }: IconProps) => {
  return (
    <s.Wrapper size={size}>
      <GatsbyImage alt={alt} image={getImage(image)} />
    </s.Wrapper>
  )
}
