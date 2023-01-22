import { ComponentStory } from "@storybook/react"

import { ThemeToggler } from "./ThemeToggler"

export default {
  title: "Components/ThemeToggler",
  component: ThemeToggler,
}

const Template: ComponentStory<typeof ThemeToggler> = () => <ThemeToggler />

export const Default = Template.bind({})
