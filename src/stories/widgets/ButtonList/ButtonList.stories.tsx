import type { Meta, StoryObj } from "@storybook/react"

import { ButtonProps } from "../../components/Button/Button"
import { cardParameters } from "../../cardParameters"
import { ButtonList } from "./ButtonList"

const meta: Meta<typeof ButtonList> = {
  component: ButtonList,
}

export default meta
type Story = StoryObj<typeof ButtonList>

export const PrimarySecondary: Story = {
  args: {
    buttons: [
      {
        primary: true,
        text: "Primary",
      } as ButtonProps,
      {
        primary: false,
        text: "Secondary",
      } as ButtonProps,
    ],
    align: "left",
    card: false,
  },
}

export const Center: Story = {
  args: {
    buttons: [
      {
        primary: true,
        text: "Primary",
      } as ButtonProps,
      {
        primary: false,
        text: "Secondary",
      } as ButtonProps,
    ],
    align: "center",
    card: false,
  },
}

export const Card: Story = {
  args: {
    buttons: [
      {
        primary: true,
        text: "Primary",
      } as ButtonProps,
      {
        primary: false,
        text: "Secondary",
      } as ButtonProps,
    ],
    align: "left",
    card: true,
  },
  ...cardParameters,
}
