import { graphql } from "gatsby"
import { TimelineStyles as s } from "./Timeline.styles"
import { Heading } from "../../components/Heading/Heading"
import {
  Timeline as TimelineWidget,
  TimelineProps as TimelineWidgetProps,
} from "../../widgets/Timeline/TimeLine"

export interface TimelineProps extends TimelineWidgetProps {
  kicker?: string
  heading: string
  text?: string
}

export const Timeline = ({ kicker, heading, text, items }: TimelineProps) => {
  items.sort((a, b) => {
    return new Date(a.date) > new Date(b.date) ? -1 : 1
  })
  items.map(({ links }) => {
    links &&
      links.forEach((link) => {
        link.size = "small"
      })
  })
  return (
    <s.MotionWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <s.Container>
        <s.ContentWrapper>
          <Heading title={heading} kicker={kicker} />
          {text && <s.Lead>{text}</s.Lead>}
          <TimelineWidget items={items} />
        </s.ContentWrapper>
      </s.Container>
    </s.MotionWrapper>
  )
}

export const query = graphql`
  fragment TimelineContent on Timeline {
    id
    kicker
    heading
    text
    items {
      category
      date
      text
      links {
        id
        href
        text
      }
    }
  }
`
