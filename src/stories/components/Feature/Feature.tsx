import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  ButtonList,
  ButtonListProps,
} from "../../widgets/ButtonList/ButtonList"
import { HomepageImage } from "../../../components/ui"
import { FeatureStyles as s } from "./Feature.styles"
import { Heading } from "../Heading/Heading"

export interface FeatureDataProps {
  id: string
  image?: HomepageImage
  kicker?: string
  heading: string
  text: string
  links: ButtonListProps["buttons"]
}

interface FeatureProps {
  flip: boolean
}

const wrapperVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const imageVariants = {
  hidden: {
    y: 200,
  },
  visible: {
    y: 0,
  },
}

const contentVariants = {
  hidden: {
    opacity: 0,
    x: -64,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

export const Feature = ({
  image,
  kicker,
  heading,
  text,
  links,
  flip,
}: FeatureDataProps & FeatureProps) => {
  return (
    <s.MotionWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={wrapperVariants}
    >
      <s.Container flip={flip}>
        <s.MotionImageWrapper variants={imageVariants}>
          {image && (
            <GatsbyImage
              alt={image.alt}
              image={getImage(image.gatsbyImageData)}
            />
          )}
        </s.MotionImageWrapper>
        <s.MotionContentWrapper variants={contentVariants}>
          <Heading title={heading} kicker={kicker} subheading />
          {text && <s.Lead>{text}</s.Lead>}
          {links && (
            <ButtonList
              buttons={links}
              card={true}
              id="CTA-Button-List"
              align="left"
            />
          )}
        </s.MotionContentWrapper>
      </s.Container>
    </s.MotionWrapper>
  )
}

export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    kicker
    heading
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
