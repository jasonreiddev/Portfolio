import { ComponentStory } from "@storybook/react"

import { Icon } from "./Icon"

export default {
  title: "Components/Icon",
  component: Icon,
}

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  image: undefined,
  alt: "alt text",
  size: "medium",
}
