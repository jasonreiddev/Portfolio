import { ComponentStory } from "@storybook/react"

import { Feature } from "./Feature"

export default {
  title: "Components/Feature",
  component: Feature,
}

const Template: ComponentStory<typeof Feature> = (args) => <Feature {...args} />

export const Default = Template.bind({})
Default.args = {
  todo: "KENTICO, UMBRACO, HEADLESS",
  todo2: "CMS Integration",
  todo3:
    "I have experience with Kentico (Including Kentico Xperience 13 and Xperience by Kentico) and Umbraco CMS platforms. I have also built sites using headless CMS platforms, such as Kontent.ai and Sanity.io.",
}
