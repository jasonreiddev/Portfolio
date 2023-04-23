import type { Meta, StoryObj } from "@storybook/react"

import { AnimatedNumber } from "./AnimatedNumber"

const meta: Meta<typeof AnimatedNumber> = {
  component: AnimatedNumber,
}

export default meta
type Story = StoryObj<typeof AnimatedNumber>

export const To100: Story = {
  args: {
    from: 0,
    to: 100,
    suffix: "+",
  },
}

export const From100: Story = {
  args: {
    from: 100,
    to: 0,
  },
}

export const From25to75: Story = {
  args: {
    from: 25,
    to: 75,
  },
}
