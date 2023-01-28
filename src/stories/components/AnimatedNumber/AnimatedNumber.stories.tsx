import { ComponentStory } from "@storybook/react"

import { AnimatedNumber } from "./AnimatedNumber"

export default {
  title: "Components/Animated Number",
  component: AnimatedNumber,
}

const Template: ComponentStory<typeof AnimatedNumber> = (args) => (
  <AnimatedNumber {...args} />
)

export const To100 = Template.bind({})
To100.args = {
  from: 0,
  to: 100,
  suffix: "+",
}

export const From100 = Template.bind({})
From100.args = {
  from: 100,
  to: 0,
}

export const From25to75 = Template.bind({})
From25to75.args = {
  from: 25,
  to: 75,
}
