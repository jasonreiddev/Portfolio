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
        kicker: "simulation cycle",
        heading: "The Theory Summarised",
        text:
          `'Omnium Gatherum' through to "Infest the Rats Nest [B-Side]" document humanity first entering a simulation, beginning the cycle:` +
          `\n- A being from outside the simulation (Satan / Han-Tyumi) corrupts the minds of the people.` +
          `\n- The world is being destroyed.` +
          `\n- The survivors enter a new simulation`,
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
