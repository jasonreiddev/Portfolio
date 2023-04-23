import type { Meta, StoryObj } from "@storybook/react"

import { PrimarySecondary } from "../../widgets/ButtonList/ButtonList.stories"
import { TimelineItem } from "./TimelineItem"

const meta: Meta<typeof TimelineItem> = {
  component: TimelineItem,
}

export default meta
type Story = StoryObj<typeof TimelineItem>

export const Achievement: Story = {
  args: {
    category: "Achievement",
    date: new Date(),
    text: "You viewed this story",
    // links: [
    //   { ...PrimarySecondary.args.buttons[0], size: "small" },
    //   { ...PrimarySecondary.args.buttons[1], size: "small" } ,
    // ], // todo fix types
  },
}

export const Employment: Story = {
  args: {
    category: "Employment",
    date: new Date(),
    text: "Started a new job",
  },
}

export const Project: Story = {
  args: {
    category: "Project",
    date: new Date(),
    text: "Started a new project",
  },
}
