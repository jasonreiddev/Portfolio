import React from "react"
import { TimelineItemStyles as s } from "./TimelineItem.styles"
import {
  ButtonList,
  ButtonListProps,
} from "../../widgets/ButtonList/ButtonList"

export interface TimelineItemProps {
  category?: "Employment" | "Project" | "Achievement"
  date: Date
  text: string
  links: ButtonListProps["buttons"]
}

const dateFormat: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
}

export const TimelineItem = ({
  category,
  date,
  text,
  links,
}: TimelineItemProps) => {
  return (
    <s.MotionWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <s.ContentContainer>
        <s.Tag>{category}</s.Tag>
        <time>{new Date(date).toLocaleDateString("en-UK", dateFormat)}</time>
        {text && <s.Text>{text}</s.Text>}
        {links && links.length > 0 && (
          <ButtonList
            buttons={links}
            card={true}
            id={`Timeline-Button-List-${date}"`}
          />
        )}
        <s.Circle />
      </s.ContentContainer>
    </s.MotionWrapper>
  )
}
