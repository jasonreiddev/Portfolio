import { ComponentStory } from "@storybook/react"
import {
  Achievement,
  Employment,
  Project,
} from "../../components/TimelineItem/TimelineItem.stories"
import { Timeline } from "./TimeLine"

export default {
  title: "Widgets/Timeline",
  component: Timeline,
}

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args} />
)

export const TimelineExample = Template.bind({})
TimelineExample.args = {
  items: [
    {
      ...Achievement.args,
    },
    {
      ...Employment.args,
    },
    {
      ...Project.args,
    },
  ],
}
