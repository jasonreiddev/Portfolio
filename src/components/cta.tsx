import * as React from "react"
import { graphql } from "gatsby"

import { CTA, CTAProps } from "../stories/kontent/CTA/CTA"

export default function HomepageCta(props: CTAProps) {
  return <CTA {...props} />
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
