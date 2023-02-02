import * as React from "react"
import { graphql } from "gatsby"
import { LogoListStyles as s } from "./LogoList.styles"
import { Variants } from "framer-motion"
import { Icon, IconProps } from "../../components/Icon/Icon"

export interface LogoListProps {
  text?: string
  logos: IconProps[]
}

const listVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -16,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

export const LogoList = ({ text, logos }: LogoListProps) => {
  return (
    <s.MotionWrapper initial="hidden" animate="visible" variants={listVariants}>
      <s.Container>
        {text && <s.Lead>{text}</s.Lead>}
        <s.LogosContainer>
          {logos &&
            logos.map((logo) => (
              <s.MotionListItem key={logo.id} variants={itemVariants}>
                {logo.image ? (
                  <Icon alt={logo.alt} image={logo.image} size="medium" />
                ) : (
                  <>{logo.alt}</>
                )}
              </s.MotionListItem>
            ))}
        </s.LogosContainer>
      </s.Container>
    </s.MotionWrapper>
  )
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
