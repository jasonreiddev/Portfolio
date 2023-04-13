import { ComponentStory } from "@storybook/react"

import { Parallax } from "./Parallax"

export default {
  title: "Components/Parallax",
  component: Parallax,
}

const Template: ComponentStory<typeof Parallax> = (args) => (
  <Parallax {...args} />
)

export const Default = Template.bind({})
Default.args = {
  scrollYProgress: 0,
}
