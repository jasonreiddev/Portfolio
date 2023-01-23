import { ComponentStory, ComponentMeta } from "@storybook/react"

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
  reversed: false,
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
  reversed: false,
}

export const Reversed = Template.bind({})
Reversed.args = {
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
  reversed: true,
}
Reversed.parameters = {
  backgrounds: {
    values: [{ name: "background", value: "var(--color-primary)" }],
  },
}
