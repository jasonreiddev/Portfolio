import { ComponentStory } from "@storybook/react"

import { LogoList } from "./LogoList"

export default {
  title: "Kontent/LogoList",
  component: LogoList,
}

const Template: ComponentStory<typeof LogoList> = (args) => (
  <LogoList {...args} />
)

export const Homepage = Template.bind({})
Homepage.args = {
  text: "This site was built using",
  logos: [
    { id: "1", alt: "Gatsby" },
    { id: "2", alt: "Kontent.ai" },
    { id: "3", alt: "Linaria" },
    { id: "4", alt: "Storybook" },
    { id: "5", alt: "TypeScript" },
    { id: "6", alt: "Framer Motion" },
  ],
}
