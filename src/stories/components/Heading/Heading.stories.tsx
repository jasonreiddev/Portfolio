import type { Meta, StoryObj } from "@storybook/react"

import { Heading } from "./Heading"

const meta: Meta<typeof Heading> = {
  component: Heading,
}

export default meta
type Story = StoryObj<typeof Heading>

export const Title: Story = {
  args: {
    title: "Heading",
  },
}

export const TitleKicker: Story = {
  args: {
    title: "Heading",
    kicker: "Kicker",
  },
}

export const KickerOnly: Story = {
  args: {
    title: "Heading",
    kicker: "Kicker",
  },
}
