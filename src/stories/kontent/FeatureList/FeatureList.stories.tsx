import { ComponentStory } from "@storybook/react"

import { FeatureList } from "./FeatureList"

export default {
  title: "Kontent/FeatureList",
  component: FeatureList,
}

const Template: ComponentStory<typeof FeatureList> = (args) => (
  <FeatureList {...args} />
)

export const Homepage = Template.bind({})
Homepage.args = {
  heading: "Software Development Skills",
  content: {},
}
