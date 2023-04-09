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
  open: true,
  size: "medium",
  text: "Primary",
}

export const Closed = Template.bind({})
Closed.args = {
  size: "medium",
  open: false,
  text: "Secondary",
}

export const Large = Template.bind({})
Large.args = {
  open: true,
  size: "large",
  text: "Large",
}

export const Small = Template.bind({})
Small.args = {
  open: true,
  size: "small",
  text: "Small",
}

export const CardAnimate = Template.bind({})
CardAnimate.args = {
  open: true,
  size: "medium",
  text: "Primary",
  card: true,
}
CardAnimate.parameters = {
  backgrounds: {
    values: [{ name: "background", value: "var(--color-card-primary)" }],
  },
}
