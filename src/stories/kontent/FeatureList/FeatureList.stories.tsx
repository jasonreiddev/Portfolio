import type { Meta, StoryObj } from "@storybook/react"
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
