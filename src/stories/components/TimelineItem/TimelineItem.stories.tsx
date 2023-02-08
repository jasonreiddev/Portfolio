import { ComponentStory } from "@storybook/react"
import { PrimarySecondary } from "../../widgets/ButtonList/ButtonList.stories"

import { TimelineItem } from "./TimelineItem"

export default {
  title: "Components/TimelineItem",
  component: TimelineItem,
}

const Template: ComponentStory<typeof TimelineItem> = (args) => (
  <TimelineItem {...args} />
)

export const Achievement = Template.bind({})
Achievement.args = {
  category: "Achievement",
  date: Date.now(),
  text: "You viewed this story",
  links: [
    { ...PrimarySecondary.args.buttons[0], size: "small" },
    { ...PrimarySecondary.args.buttons[1], size: "small" },
  ],
}

export const Employment = Template.bind({})
Employment.args = {
  category: "Employment",
  date: Date.now(),
  text: "Started a new job",
}

export const Project = Template.bind({})
Project.args = {
  category: "Project",
  date: Date.now(),
  text: "Started a new project",
}
