import type { Meta, StoryObj } from "@storybook/react"

import { TimelineExample } from "../../widgets/Timeline/Timeline.stories"
import { Timeline } from "./Timeline"

const meta: Meta<typeof Timeline> = {
  component: Timeline,
}

export default meta
type Story = StoryObj<typeof Timeline>

export const AboutPage: Story = {
  args: {
    kicker: "EMPLOYMENT, PROJECTS, ACHIEVEMENTS",
    heading: "Timeline",
    text: "My software development journey",
    items: TimelineExample.args.items,
  },
}

export const Gizzverse: Story = {
  args: {
    kicker: "K.G.L.W",
    heading: "Gizzverse",
    text: "Theoretical Gizzverse narrative timeline",
    items: [
      {
        title: "Omnium Gatherum",
        text: `Earth is dying.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/4tuqA7qbVsPukqsYPPrcF7?utm_source=generator",
      },
      {
        title: "Laminated Denim",
        text: `The simulation is created.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/5f0IPVaiRNK0knLx8UbqIq?utm_source=generator",
        parallelToPrev: true,
      },
      {
        title: "Infest the Rats' Nest [A-Side]",
        text: `Earth continues dying. Humanity begins to retreat into the simulation.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/1B12ldQwBhDeS0gIcUg0ux?utm_source=generator",
      },
      {
        title: "Infest the Rats' Nest [B-Side]",
        text: `Mars colony is destroyed and the attempt to colonise Venus is unsuccessful. The remaining humans retreat into the simulation.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/5mEJBzVBXj5XkHmQATh1KM?utm_source=generator",
      },
      {
        title: "Quarters!",
        text: `Documents the Venusian descent into madness.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/2sJsyTO56RIPMrWmKV4908?utm_source=generator",
        parallelToPrev: true,
      },
      {
        title: "I'm In Your Mind Fuzz [A-Side]",
        text: `Seven people are influenced by Satan, to realize they are in a simulation.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/2QcTwxhZapPixm8ymwUgmE?utm_source=generator",
      },
      {
        title: "I'm In Your Mind Fuzz [B-Side]",
        text: `Humanity in the simulation continues to be destructive. The simulated world is dying.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/5z1zIu1fT1cIxrZmm50plS?utm_source=generator",
      },
      {
        title: "K.G.",
        text: `Humans are altering themselves to join the creatures from hell.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/6uuQKwM3fRETiscHqlnxuo?utm_source=generator",
      },
      {
        title: "Nonagon Infinity",
        text: `The seven people influenced by Satan open the door to hell, releasing creatures, humans in origin, and some with robotic elements. This 'alters' the world.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/2tEvJY6mmREPqmxZG5PJMT?utm_source=generator",
      },
      {
        title: "Murder of the Universe [Disc 1]",
        text: `'The Tale Of The Altered Beast'. The 'Lord of Lightning', a master of magic called 'Tetrachromacy', comes through the door to hell, and seeks to rule over the altered world.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/0eFnZESdmTfXxQiWYLTSb4?utm_source=generator",
      },
      {
        title: "L.W.",
        text: `The simulated world continues dying.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/7mGW0YccQQZPCD1acHaClx?utm_source=generator",
      },
      {
        title: "Murder of the Universe [Disc 2]",
        text: `'The Lord Of Lightning Vs Balrog'. The Balrog is slain by the 'Lord of Lightning'.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/2MV9sGmINkvCzzbQj5vhh0?utm_source=generator",
      },
      {
        title: "Fishing for Fishies",
        text: `Introduces the last non-altered human Han-Tyumi (an anagram of Humanity.) And Boogieman Sam, a cyborg who Han-Tyumi is disgusted by.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/5DEL0SSMojInN54XnSWwR1?utm_source=generator",
        parallelToPrev: true,
      },
      ,
      {
        title: "Murder of the Universe [Disc 3]",
        text: `Han-Tyumi uses Boogieman Sam to create the 'Soy-Protein Munt Machine', which he fuses with the destroy the altered world.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/6ioaq9yDIYc1sWY26yd9UT?utm_source=generator",
      },
      {
        title: "Polygondwanaland",
        text: `The people of Polygondwanaland  use 'Tetrachromacy' to hold off the destruction of the 'Munt Machine' and escape to a new world, 'Brunswick East'.`,
        info: `Similar to the events of 'Omnium Gatherum' through to 'Infest the Rats' Nest [B-Side]', with the simulation being created and the last humans escaping.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/5K3drs66QoLhSFnw4q5KFn?utm_source=generator",
      },
      {
        title: "Sketches of Brunswick East [A-Side]",
        text: `Han-Tyumi begins corrupting the minds of the people within Brunswick East. He becomes their leader.`,
        info: `Similar to "I'm In Your Mind Fuzz [B-Side]" where Satan corrupts the minds of the seven people.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/5rvkoNlufp1WUV5pnGuKOQ?utm_source=generator",
      },
      {
        title: "Sketches Of Brunswick East [B-Side]",
        text: `Han-Tyumi destroys Brunswick East.`,
        info: `Similar to 'Murder of the Universe [Disc 1]', if another instance of nonagon infinity is opened here, this would cause the cycle to repeat, with a new being/version of Han-Tyumi.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/4wxTmbq0PouQbjimGEw9E4?utm_source=generator",
      },
      {
        title: "Flying Microtonal Banana [A-Side]",
        text: `Brunswick East is destroyed.`,
        info: `Similar to 'Murder of the Universe [Disc 2]'.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/6h0sHXieTPtHkmtHXYhau8?utm_source=generator",
      },
      {
        title: "Flying Microtonal Banana [B-Side]",
        text: `Travellers try to escape from Brunswick East.`,
        info: `Similar to 'Polygondwanaland' / "I'm In Your Mind Fuzz", the Travellers enter a new simulation, repeating the cycle.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/73G2yz58Faqm5GoqfGOPBK?utm_source=generator",
      },
      {
        title: "Ice, Death, Planets, Lungs, Mushrooms And Lava",
        text: `Nature begins to heal and reclaim the Earth once the Humans are in the simulation`,
        info: `Because the Simulations exist frozen within time, this album takes place directly after "Infest the Rats' Nest" from the perspective of being outside the simulation`,
        iframeSrc:
          "https://open.spotify.com/embed/album/2nPbslvl01lfELsFHTKp0s?utm_source=generatorr",
      },
    ],
  },
}
