import { StoryObj } from "@storybook/react"

type Story = StoryObj<undefined>

export const cardParameters: Story = {
  parameters: {
    backgrounds: {
      values: [{ name: "background", value: "var(--color-card-primary)" }],
    },
  },
}
