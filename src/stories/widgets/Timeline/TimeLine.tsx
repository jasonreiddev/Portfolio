import React from "react"
import { TimelineStyles as s } from "./Timeline.styles"
import {
  TimelineItem,
  TimelineItemProps,
} from "../../components/TimelineItem/TimelineItem"

export interface TimelineProps {
  items: TimelineItemProps[]
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <s.Container>
      {items &&
        items.map((item, i) => (
          <TimelineItem {...item} key={item.date.toString()} />
        ))}
    </s.Container>
  )
}
