import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  ButtonList,
  ButtonListProps,
} from "../../widgets/ButtonList/ButtonList"
import { CTAStyles as s } from "./StatList.styles"
import { Heading } from "../../components/Heading/Heading"
import { HomepageImage } from "../../../components/ui"
import { useMotionValue, useTransform, Variants } from "framer-motion"
import { Icon } from "../../components/Icon/Icon"
import { AnimatedNumber } from "../../components/AnimatedNumber/AnimatedNumber"

interface StatProps {
  id: string
  value: string
  label: string
}

export interface StatListProps {
  icon?: HomepageImage
  kicker?: string
  heading: string
  text?: string
  content: StatProps[]
  links: ButtonListProps["buttons"]
  image?: HomepageImage
}

function Stat(props) {
  return (
    <s.StatWrapper>
      <s.Stat>
        <AnimatedNumber
          from={0}
          to={parseInt(props.value.match(/\d/g).join(""), 0)}
          suffix={props.value.includes("+") ? "+" : null}
        />
      </s.Stat>
      <s.StatLabel>{props.label}</s.StatLabel>
    </s.StatWrapper>
  )
}

const cardVariants: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export const StatList = ({
  icon,
  kicker,
  heading,
  text,
  content,
  links,
  image,
}: StatListProps) => {
  return (
    <s.MotionWrapper
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <s.Container>
        <s.ContentWrapper>
          {icon && <Icon alt={icon.alt} image={icon.gatsbyImageData} />}
          <Heading title={heading} kicker={kicker} />
          {text && <s.Lead>{text}</s.Lead>}
          <s.StatContainer>
            {content &&
              content.map((stat) => (
                <li key={stat.id}>
                  <Stat {...stat} />
                </li>
              ))}
          </s.StatContainer>
          {links && (
            <ButtonList buttons={links} card={true} id="CTA-Button-List" />
          )}
        </s.ContentWrapper>
        {image && (
          <s.MotionImageWrapper initial={{ x: 200 }} whileInView={{ x: 0 }}>
            <GatsbyImage
              alt={image.alt}
              image={getImage(image.gatsbyImageData)}
            />
          </s.MotionImageWrapper>
        )}
      </s.Container>
    </s.MotionWrapper>
  )
}

export const query = graphql`
  fragment HomepageStatListContent on HomepageStatList {
    id
    kicker
    heading
    text
    image {
      id
      alt
      gatsbyImageData
    }
    icon {
      id
      alt
      gatsbyImageData
    }
    content {
      id
      value
      label
      heading
    }
    links {
      id
      href
      text
    }
  }
`
