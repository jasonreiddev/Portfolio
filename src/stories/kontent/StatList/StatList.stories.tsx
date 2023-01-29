import { ComponentStory } from "@storybook/react"
import { PrimarySecondary } from "../../widgets/ButtonList/ButtonList.stories"

import { StatList } from "./StatList"

export default {
  title: "Kontent/StatList",
  component: StatList,
}

const Template: ComponentStory<typeof StatList> = (args) => (
  <StatList {...args} />
)

export const Homepage = Template.bind({})
Homepage.args = {
  id: "test",
  heading: "Digital Agency Stats",
  text: "In my relatively short time working at a digital agency, I have amassed a great deal of exposure to Clients, Projects, and Issues - ranging from building new components and adding new sites in a Kentico instance to resolving minor bugs.",
  content: [
    { id: "clients", value: "50+", label: "Clients" },
    { id: "projects", value: "75+", label: "Projects" },
    { id: "tickets", value: "1000+", label: "Tickets Closed" },
  ],
}

export const WithButtonsAndKicker = Template.bind({})
WithButtonsAndKicker.args = {
  id: "test",
  kicker: "Kicker",
  heading: "Heading",
  text: "Text",
  links: PrimarySecondary.args.buttons,
}
