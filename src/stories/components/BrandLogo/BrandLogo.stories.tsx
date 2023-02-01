import { ComponentStory } from "@storybook/react"

import { BrandLogo } from "./BrandLogo"

export default {
  title: "Components/BrandLogo",
  component: BrandLogo,
}

const Template: ComponentStory<typeof BrandLogo> = (args) => (
  <BrandLogo {...args} />
)

export const Animate = Template.bind({})
Animate.args = {
  animate: true,
  size: "medium",
  text: "Primary",
}

export const DoNotAnimate = Template.bind({})
DoNotAnimate.args = {
  size: "medium",
  animate: false,
  text: "Secondary",
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

export const CardAnimate = Template.bind({})
CardAnimate.args = {
  animate: true,
  size: "medium",
  text: "Primary",
  card: true,
}
CardAnimate.parameters = {
  backgrounds: {
    values: [{ name: "background", value: "var(--color-card-primary)" }],
  },
}

export const CardSecondary = Template.bind({})
CardSecondary.args = {
  animate: false,
  size: "medium",
  text: "Secondary",
  card: true,
}
CardSecondary.parameters = {
  backgrounds: {
    values: [{ name: "background", value: "var(--color-card-primary)" }],
  },
}
