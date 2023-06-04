import SEOHead from "../components/head"
import { Timeline } from "../stories/widgets/Timeline/TimeLine"
import { Gizzverse as TimelineProps } from "../stories/kontent/Timeline/Timeline.stories"
import { TimelineStyles as s } from "../stories/kontent/Timeline/Timeline.styles"
import { Heading } from "../stories/components/Heading/Heading"
import { FeatureList } from "../stories/kontent/FeatureList/FeatureList"
import { Gizzverse as FeatureListProps } from "../stories/kontent/FeatureList/FeatureList.stories"

export default function Gizzverse() {
  return (
    <s.MotionWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <s.Container>
        <s.ContentWrapper>
          <Heading
            title={TimelineProps.args.heading}
            kicker={TimelineProps.args.kicker}
          />
          {TimelineProps.args.text && (
            <s.Lead>{TimelineProps.args.text}</s.Lead>
          )}
          <Timeline items={TimelineProps.args.items} />
        </s.ContentWrapper>
        <FeatureList
          content={FeatureListProps.args.content}
          heading={FeatureListProps.args.heading}
        />
      </s.Container>
    </s.MotionWrapper>
  )
}
export const Head = () => {
  return (
    <>
      <body data-gizz={true} />
      <SEOHead
        title={TimelineProps.args.heading}
        description={TimelineProps.args.text}
      />
    </>
  )
}
