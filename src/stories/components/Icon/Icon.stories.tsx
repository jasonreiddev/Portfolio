import type { Meta, StoryObj } from "@storybook/react"
import { IGatsbyImageData } from "gatsby-plugin-image"

import { testImage } from "../../testImage"
import { Icon } from "./Icon"

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    image: testImage as IGatsbyImageData,
    alt: "alt text",
    size: "medium",
  },
}
