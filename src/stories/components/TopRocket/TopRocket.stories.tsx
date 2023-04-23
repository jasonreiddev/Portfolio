import type { Meta, StoryObj } from "@storybook/react"

import { cardParameters } from "../../cardParameters"
import { TopRocket } from "./TopRocket"

const meta: Meta<typeof TopRocket> = {
  component: TopRocket,
}

export default meta
type Story = StoryObj<typeof TopRocket>

export const Animate: Story = {
  args: {
    size: "medium",
  },
}

export const Stationary: Story = {
  args: {
    size: "medium",
  },
}

export const Large: Story = {
  args: {
    size: "large",
  },
}

export const Small: Story = {
  args: {
    size: "small",
  },
}

export const CardAnimate: Story = {
  args: {
    size: "medium",
    card: true,
  },
  ...cardParameters,
}
