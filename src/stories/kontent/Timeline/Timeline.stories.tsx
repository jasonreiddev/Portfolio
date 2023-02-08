import { ComponentStory } from "@storybook/react"
import { TimelineExample } from "../../widgets/Timeline/Timeline.stories"

import { Timeline } from "./Timeline"

export default {
  title: "Kontent/Timeline",
  component: Timeline,
}

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args} />
)

export const AboutPage = Template.bind({})
AboutPage.args = {
  kicker: "EMPLOYMENT, PROJECTS, ACHIEVEMENTS",
  heading: "Time Line",
  text: "My software development journey",
  items: TimelineExample.args.items,
}
