import { ComponentStory } from "@storybook/react"

import { ButtonList } from "./ButtonList"

export default {
  title: "Widgets/ButtonList",
  component: ButtonList,
}

const Template: ComponentStory<typeof ButtonList> = (args) => (
  <ButtonList {...args} />
)

export const PrimarySecondary = Template.bind({})
PrimarySecondary.args = {
  buttons: [
    {
      primary: true,
      text: "Primary",
    },
    {
      primary: false,
      text: "Secondary",
    },
  ],
  align: "left",
  card: false,
}

export const Center = Template.bind({})
Center.args = {
  buttons: [
    {
      primary: true,
      text: "Primary",
    },
    {
      primary: false,
      text: "Secondary",
    },
  ],
  align: "center",
  card: false,
}

export const Card = Template.bind({})
Card.args = {
  buttons: [
    {
      primary: true,
      text: "Primary",
    },
    {
      primary: false,
      text: "Secondary",
    },
  ],
  align: "left",
  card: true,
}
Card.parameters = {
  backgrounds: {
    values: [{ name: "background", value: "var(--color-card-primary)" }],
  },
}
