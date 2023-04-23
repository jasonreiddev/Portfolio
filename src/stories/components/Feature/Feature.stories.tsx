import type { Meta, StoryObj } from "@storybook/react"

import { PrimarySecondary } from "../../widgets/ButtonList/ButtonList.stories"
import { Feature } from "./Feature"

const meta: Meta<typeof Feature> = {
  component: Feature,
}

export default meta
type Story = StoryObj<typeof Feature>

export const CMSIntegration: Story = {
  args: {
    id: "CMSIntegration",
    kicker: "KENTICO, UMBRACO, HEADLESS",
    heading: "CMS Integration",
    text: "I have experience with Kentico (Including Kentico Xperience 13 and Xperience by Kentico) and Umbraco CMS platforms. I have also built sites using headless CMS platforms, such as Kontent.ai and Sanity.io.",
  },
}

export const WithButtons: Story = {
  args: {
    id: "nextgen",
    kicker: "REACT, VUE, CSS-IN-JS, JAMSTACK",
    heading: "Building Next-Gen Websites",
    text: "I can integrate my fundamental knowledge of web development (such as with vanilla Javascript and CSS ) with modern technology stacks, to create modular and maintainable websites.",
    links: PrimarySecondary.args.buttons,
  },
}
