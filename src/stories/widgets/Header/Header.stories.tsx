import type { Meta, StoryObj } from "@storybook/react"
import { Link } from "gatsby-link"

import { Header } from "./Header"

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

export const HeaderExample: Story = {
  args: {
    navItems: [
      {
        id: "2",
        navItemType: "Link",
        href: "/",
        text: "Home",
      },
    ],
  },
}
