import { TimelineItemStyles as s } from "./TimelineItem.styles"
import {
  ButtonList,
  ButtonListProps,
} from "../../widgets/ButtonList/ButtonList"

export interface TimelineItemProps {
  category?: "Employment" | "Project" | "Achievement"
  date?: Date
  title?: string
  text?: string
  info?: string
  links?: ButtonListProps["buttons"]
  iframeSrc?: string
  parallelToPrev?: boolean
}

const dateFormat: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
}

export const TimelineItem = ({
  category,
  date,
  title,
  text,
  info,
  links,
  iframeSrc,
  parallelToPrev,
}: TimelineItemProps) => {
  return (
    <s.MotionWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <s.ContentContainer>
        <s.Heading>
          {category && <s.Tag>{category}</s.Tag>}
          {title && !category && <s.Title>{title}</s.Title>}
          {date && (
            <time>
              {new Date(date).toLocaleDateString("en-UK", dateFormat)}
            </time>
          )}
        </s.Heading>
        {text && <s.Text>{text}</s.Text>}
        {info && <s.Info>{info}</s.Info>}
        {links && links.length > 0 && (
          <ButtonList
            buttons={links}
            card={true}
            id={`Timeline-Button-List-${date}"`}
            align="right"
          />
        )}
        {iframeSrc && (
          <iframe
            src={iframeSrc}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        )}
        {!parallelToPrev && <s.Circle />}
      </s.ContentContainer>
    </s.MotionWrapper>
  )
}
