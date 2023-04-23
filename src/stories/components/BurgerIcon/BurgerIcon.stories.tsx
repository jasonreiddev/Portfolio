import type { Meta, StoryObj } from "@storybook/react"

import { cardParameters } from "../../cardParameters"
import { BurgerIcon } from "./BurgerIcon"

const meta: Meta<typeof BurgerIcon> = {
  component: BurgerIcon,
}

export default meta
type Story = StoryObj<typeof BurgerIcon>
export const Animate: Story = {
  args: {
    open: true,
    size: "medium",
  },
}

export const Closed: Story = {
  args: {
    size: "medium",
    open: false,
  },
}

export const Large: Story = {
  args: {
    open: true,
    size: "large",
  },
}

export const Small: Story = {
  args: {
    open: true,
    size: "small",
  },
}

export const CardAnimate: Story = {
  args: {
    open: true,
    size: "medium",
    card: true,
  },
  ...cardParameters,
}
