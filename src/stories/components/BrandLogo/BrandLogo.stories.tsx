import type { Meta, StoryObj } from "@storybook/react"

import { cardParameters } from "../../cardParameters"
import { BrandLogo } from "./BrandLogo"

const meta: Meta<typeof BrandLogo> = {
  component: BrandLogo,
}

export default meta
type Story = StoryObj<typeof BrandLogo>

export const Animate: Story = {
  args: {
    animate: true,
    size: "medium",
  },
}

export const DoNotAnimate: Story = {
  args: {
    size: "medium",
    animate: false,
  },
}

export const Large: Story = {
  args: {
    animate: true,
    size: "large",
  },
}

export const Small: Story = {
  args: {
    animate: true,
    size: "small",
  },
}

export const CardAnimate: Story = {
  args: {
    animate: true,
    size: "medium",
    card: true,
  },
  ...cardParameters,
}

export const CardSecondary: Story = {
  args: {
    animate: false,
    size: "medium",
    card: true,
  },
  ...cardParameters,
}
