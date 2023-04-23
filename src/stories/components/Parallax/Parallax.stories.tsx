import type { Meta, StoryObj } from "@storybook/react"
import { MotionValue, useScroll } from "framer-motion"

import { Parallax } from "./Parallax"

const meta: Meta<typeof Parallax> = {
  component: Parallax,
}

export default meta
type Story = StoryObj<typeof Parallax>

export const Default: Story = {
  args: {
    pageWidth: 100,
    pageHeight: 100,
  },
}
