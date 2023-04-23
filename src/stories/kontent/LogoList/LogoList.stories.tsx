import type { Meta, StoryObj } from "@storybook/react"

import { LogoList } from "./LogoList"

const meta: Meta<typeof LogoList> = {
  component: LogoList,
}

export default meta
type Story = StoryObj<typeof LogoList>

export const Homepage: Story = {
  args: {
    text: "This site was built using",
    logos: [
      { id: "1", alt: "Gatsby" },
      { id: "2", alt: "Kontent.ai" },
      { id: "3", alt: "Linaria" },
      { id: "4", alt: "Storybook" },
      { id: "5", alt: "TypeScript" },
      { id: "6", alt: "Framer Motion" },
    ],
  },
}
