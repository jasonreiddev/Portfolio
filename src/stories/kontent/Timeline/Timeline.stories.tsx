import type { Meta, StoryObj } from "@storybook/react"

import { TimelineExample } from "../../widgets/Timeline/Timeline.stories"
import { Timeline } from "./Timeline"

const meta: Meta<typeof Timeline> = {
  component: Timeline,
}

export default meta
type Story = StoryObj<typeof Timeline>

export const AboutPage: Story = {
  args: {
    kicker: "EMPLOYMENT, PROJECTS, ACHIEVEMENTS",
    heading: "Timeline",
    text: "My software development journey",
    items: TimelineExample.args.items,
  },
}
