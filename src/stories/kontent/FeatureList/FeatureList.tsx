import { graphql } from "gatsby"
import { Feature, FeatureDataProps } from "../../components/Feature/Feature"
import { FeatureListStyles as s } from "./FeatureList.styles"
import { Heading } from "../../components/Heading/Heading"

export interface FeatureListProps {
  kicker?: string
  heading: string
  text?: string
  content: FeatureDataProps[]
}

export const FeatureList = ({
  kicker,
  heading,
  text,
  content,
}: FeatureListProps) => {
  return (
    <s.MotionWrapper>
      <s.Container>
        <s.ContentWrapper>
          <Heading title={heading} kicker={kicker} />
          {text && <s.Lead>{text}</s.Lead>}
        </s.ContentWrapper>
        <s.ContentContainer>
          {content.map((feature, i) => (
            <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
          ))}
        </s.ContentContainer>
      </s.Container>
    </s.MotionWrapper>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
