import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  ButtonList,
  ButtonListProps,
} from "../../widgets/ButtonList/ButtonList"
import { CTAStyles as s } from "./CTA.styles"
import { Heading } from "../../components/Heading/Heading"
import { HomepageImage } from "../../../components/ui"

export interface CTAProps {
  id: string
  kicker?: string
  heading: string
  text: string
  links: ButtonListProps["buttons"]
  image?: HomepageImage
}

export const CTA = ({ kicker, heading, text, links, image }: CTAProps) => {
  return (
    <s.Wrapper>
      <s.Container>
        <s.ContentWrapper>
          <Heading title={heading} kicker={kicker} />
          <s.Lead>{text}</s.Lead>
          <ButtonList buttons={links} card={true} id="CTA-Button-List" />
        </s.ContentWrapper>
        {image && (
          <s.ImageWrapper>
            <GatsbyImage
              alt={image.alt}
              image={getImage(image.gatsbyImageData)}
            />
          </s.ImageWrapper>
        )}
      </s.Container>
    </s.Wrapper>
  )
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    kicker
    heading
    text
    image {
      alt
      id
      gatsbyImageData
    }
    links {
      id
      href
      text
    }
  }
`
