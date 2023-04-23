import type { Meta, StoryObj } from "@storybook/react"

import { PrimarySecondary } from "../../widgets/ButtonList/ButtonList.stories"
import { StatList } from "./StatList"

const meta: Meta<typeof StatList> = {
  component: StatList,
}

export default meta
type Story = StoryObj<typeof StatList>

export const Homepage: Story = {
  args: {
    heading: "Digital Agency Stats",
    text: "In my relatively short time working at a digital agency, I have amassed a great deal of exposure to Clients, Projects, and Issues - ranging from building new components and adding new sites in a Kentico instance to resolving minor bugs.",
    content: [
      { id: "clients", value: "50+", label: "Clients" },
      { id: "projects", value: "75+", label: "Projects" },
      { id: "tickets", value: "1000+", label: "Tickets Closed" },
    ],
  },
}

export const WithButtonsAndKicker: Story = {
  args: {
    kicker: "Kicker",
    heading: "Heading",
    text: "Text",
    links: PrimarySecondary.args.buttons,
  },
}
