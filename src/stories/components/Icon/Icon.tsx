import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { IconStyles as s } from "./Icon.styles"

export interface IconProps {
  alt: string
  image?: IGatsbyImageData
  size?: "small" | "medium" | "large"
  id?: string
}

export const Icon = ({ alt, image, size = "medium" }: IconProps) => {
  return (
    <s.Wrapper size={size}>
      <GatsbyImage alt={alt} image={getImage(image)} />
    </s.Wrapper>
  )
}
