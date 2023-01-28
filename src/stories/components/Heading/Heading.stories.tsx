import { ComponentStory } from "@storybook/react"

import { Heading } from "./Heading"

export default {
  title: "Components/Heading",
  component: Heading,
}

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Title = Template.bind({})
Title.args = {
  title: "Heading",
}

export const TitleKicker = Template.bind({})
TitleKicker.args = {
  title: "Heading",
  kicker: "Kicker",
}

export const KickerOnly = Template.bind({})
KickerOnly.args = {
  title: "Heading",
  kicker: "Kicker",
}
