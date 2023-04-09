import { ComponentStory } from "@storybook/react"

import { TopRocket } from "./TopRocket"

export default {
  title: "Components/TopRocket",
  component: TopRocket,
}

const Template: ComponentStory<typeof TopRocket> = (args) => (
  <TopRocket {...args} />
)

export const Animate = Template.bind({})
Animate.args = {
  takeOff: true,
  size: "medium",
  text: "Primary",
}

export const Stationary = Template.bind({})
Stationary.args = {
  size: "medium",
  takeOff: false,
  text: "Secondary",
}

export const Large = Template.bind({})
Large.args = {
  takeOff: true,
  size: "large",
  text: "Large",
}

export const Small = Template.bind({})
Small.args = {
  takeOff: true,
  size: "small",
  text: "Small",
}

export const CardAnimate = Template.bind({})
CardAnimate.args = {
  takeOff: true,
  size: "medium",
  text: "Primary",
  card: true,
}
CardAnimate.parameters = {
  backgrounds: {
    values: [{ name: "background", value: "var(--color-card-primary)" }],
  },
}
