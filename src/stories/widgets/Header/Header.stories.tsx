import { ComponentStory } from "@storybook/react"
import { Header } from "./Header"

export default {
  title: "Widgets/Header",
  component: Header,
}

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const HeaderExample = Template.bind({})
HeaderExample.args = {
  navItems: [
    {
      id: 2,
      navItemType: "title",
      href: "/",
      text: "Home",
    },
  ],
}
