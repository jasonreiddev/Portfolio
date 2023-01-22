import { ComponentStory, ComponentMeta } from "@storybook/react"
import { PrimarySecondary } from "../../Widgets/ButtonList/ButtonList.stories"

import { CTA } from "./CTA"

export default {
  title: "Kontent/CTA",
  component: CTA,
}

const Template: ComponentStory<typeof CTA> = (args) => <CTA {...args} />

export const Homepage = Template.bind({})
Homepage.args = {
  id: "test",
  kicker: "Kicker",
  heading: "Heading",
  text: "Text",
  links: PrimarySecondary.args.buttons,
}
