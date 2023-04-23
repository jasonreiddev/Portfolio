import type { Meta, StoryObj } from "@storybook/react"

import { PrimarySecondary } from "../../widgets/ButtonList/ButtonList.stories"
import { CTA } from "./CTA"

const meta: Meta<typeof CTA> = {
  component: CTA,
}

export default meta
type Story = StoryObj<typeof CTA>

export const Homepage: Story = {
  args: {
    id: "test",
    kicker: "Kicker",
    heading: "Heading",
    text: "Text",
    links: PrimarySecondary.args.buttons,
  },
}
