import type { Meta, StoryObj } from "@storybook/react"

import {
  Achievement,
  Employment,
  Project,
} from "../../components/TimelineItem/TimelineItem.stories"
import { Timeline } from "./TimeLine"

const meta: Meta<typeof Timeline> = {
  component: Timeline,
}

export default meta
type Story = StoryObj<typeof Timeline>

export const TimelineExample: Story = {
  args: {
    items: [
      {
        ...(Achievement.args as any),
      },
      {
        ...(Employment.args as any),
      },
      {
        ...(Project.args as any),
      },
    ],
  },
}
// todo any
