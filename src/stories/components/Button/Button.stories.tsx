import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "./Button"

export default {
  title: "Components/Button",
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  size: "medium",
  text: "Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: "medium",
  primary: false,
  text: "Secondary",
}

export const Large = Template.bind({})
Large.args = {
  primary: true,
  size: "large",
  text: "Large",
}

export const Small = Template.bind({})
Small.args = {
  primary: true,
  size: "small",
  text: "Small",
}
