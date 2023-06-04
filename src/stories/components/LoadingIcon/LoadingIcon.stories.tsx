import type { Meta, StoryObj } from "@storybook/react"

import { LoadingIcon } from "./LoadingIcon"

const meta: Meta<typeof LoadingIcon> = {
  component: LoadingIcon,
}

export default meta
type Story = StoryObj<typeof LoadingIcon>
export const Large: Story = {
  args: {
    size: "medium",
  },
}

export const Medium: Story = {
  args: {
    size: "medium",
  },
}

export const Small: Story = {
  args: {
    size: "small",
  },
}
