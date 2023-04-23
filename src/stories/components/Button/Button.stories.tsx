import type { Meta, StoryObj } from "@storybook/react"

import { cardParameters } from "../../cardParameters"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    primary: true,
    size: "medium",
    text: "Primary",
  },
}

export const Secondary: Story = {
  args: {
    size: "medium",
    primary: false,
    text: "Secondary",
  },
}

export const Large: Story = {
  args: {
    primary: true,
    size: "large",
    text: "Large",
  },
}

export const Small: Story = {
  args: {
    primary: true,
    size: "small",
    text: "Small",
  },
}

export const CardPrimary: Story = {
  args: {
    primary: true,
    size: "medium",
    text: "Primary",
    card: true,
  },
  ...cardParameters,
}

export const CardSecondary: Story = {
  args: {
    primary: false,
    size: "medium",
    text: "Secondary",
    card: true,
  },
  ...cardParameters,
}
