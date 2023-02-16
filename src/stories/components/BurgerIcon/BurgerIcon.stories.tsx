import { ComponentStory } from "@storybook/react"

import { BurgerIcon } from "./BurgerIcon"

export default {
  title: "Components/BurgerIcon",
  component: BurgerIcon,
}

const Template: ComponentStory<typeof BurgerIcon> = (args) => (
  <BurgerIcon {...args} />
)

export const Default = Template.bind({})
Default.args = {
  size: "medium",
  text: "Primary",
}

export const Large = Template.bind({})
Large.args = {
  animate: true,
  size: "large",
  text: "Large",
}

export const Small = Template.bind({})
Small.args = {
  animate: true,
  size: "small",
  text: "Small",
}

export const Card = Template.bind({})
Card.args = {
  animate: true,
  size: "medium",
  text: "Primary",
  card: true,
}
Card.parameters = {
  backgrounds: {
    values: [{ name: "background", value: "var(--color-card-primary)" }],
  },
}
