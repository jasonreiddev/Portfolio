import type { Meta, StoryObj } from "@storybook/react"
import { ButtonProps } from "../../components/Button/Button"
import { FeatureDataProps } from "../../components/Feature/Feature"

import {
  CMSIntegration,
  WithButtons,
} from "../../components/Feature/Feature.stories"
import { FeatureList } from "./FeatureList"

const meta: Meta<typeof FeatureList> = {
  component: FeatureList,
}

export default meta
type Story = StoryObj<typeof FeatureList>

export const Homepage: Story = {
  args: {
    heading: "Software Development Skills",
    content: [
      CMSIntegration.args as FeatureDataProps,
      WithButtons.args as FeatureDataProps,
    ],
  },
}

export const Gizzverse: Story = {
  args: {
    content: [
      {
        id: "gizzverse",
        kicker: "Gizzverse's Endless Cycle",
        heading: "Destruction and Rebirth",
        text: `The Gizzverse depicts a cycle of destruction and rebirth within a universe facing ecological collapse. It begins with Earth's impending demise, leading scientists to create a simulated reality as a last resort. As humans enter the simulation, they face their own destructive tendencies and unleash dark forces from hell. Altered beings emerge, battles ensue, and eventually, the simulated world crumbles. The cycle repeats as survivors enter new simulations, while nature outside the simulations tries to heal. The Gizzverse explores the interconnected themes of environmental devastation, human folly, and the cyclical nature of existence.`,
        links: [
          {
            primary: true,
            text: "Gizzverse Full Playlist",
            href: "https://open.spotify.com/playlist/5ZClpRt3GvgbRoDHEb0746?si=64cbcf2ca0f64a3b",
          } as ButtonProps,
          {
            primary: false,
            text: "Essential Playlist",
            href: "https://open.spotify.com/playlist/3UfVBq8BvqgLpZiVq1DoJ7?si=fe31c1abcf324c50",
          } as ButtonProps,
        ],
      },
    ],
  },
}
