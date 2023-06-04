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
    heading: "The Gizzverse: A Cohesive Narrative Timeline",
    text: "Dive into the intricate and enigmatic world of King Gizzard and the Lizard Wizard with the Gizzverse, a fan-created narrative timeline that weaves together the band's albums into a captivating and interconnected story. The Gizzverse explores the interconnected themes of environmental devastation, human folly, and the cyclical nature of existence.",
    items: [
      {
        title: "Omnium Gatherum",
        text: `Earth is dying. The planet faces ecological devastation and is on the verge of collapse.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/4tuqA7qbVsPukqsYPPrcF7?utm_source=generator",
      },
      {
        title: "Laminated Denim",
        text: `In a last-ditch effort to save humanity, scientists create a simulated reality.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/5f0IPVaiRNK0knLx8UbqIq?utm_source=generator",
      },
      {
        title: "Infest the Rats' Nest [A-Side]",
        text: `As Earth's destruction accelerates, humanity seeks refuge by entering the simulated world.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/1B12ldQwBhDeS0gIcUg0ux?utm_source=generator",
      },
      {
        title: "Infest the Rats' Nest [B-Side]",
        text: `Efforts to colonize other planets, such as Mars and Venus, fail catastrophically, forcing the remaining humans to retreat into the simulation.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/5mEJBzVBXj5XkHmQATh1KM?utm_source=generator",
      },
      {
        title: "Quarters!",
        text: `Within the simulation, the inhabitants of Venus descend into madness and chaos.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/2sJsyTO56RIPMrWmKV4908?utm_source=generator",
        parallelToPrev: true,
      },
      {
        title: "I'm In Your Mind Fuzz [A-Side]",
        text: `Seven individuals influenced by a dark force, potentially Satan, become aware of the simulation's nature.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/2QcTwxhZapPixm8ymwUgmE?utm_source=generator",
      },
      {
        title: "I'm In Your Mind Fuzz [B-Side]",
        text: `As humanity within the simulation becomes increasingly destructive, the simulated world itself begins to crumble.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/5z1zIu1fT1cIxrZmm50plS?utm_source=generator",
      },
      {
        title: "K.G.",
        text: `Humans within the simulation start modifying themselves, aligning with creatures from the depths of hell.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/6uuQKwM3fRETiscHqlnxuo?utm_source=generator",
      },
      {
        title: "Nonagon Infinity",
        text: `The seven individuals influenced by the dark force open a gateway to hell within the simulation, unleashing a horde of creatures, some of which possess robotic elements.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/2tEvJY6mmREPqmxZG5PJMT?utm_source=generator",
      },
      {
        title: "Murder of the Universe [Disc 1]",
        text: `'The Tale Of The Altered Beast'. A being known as the 'Lord of Lightning,' who possesses magical powers called 'Tetrachromacy,' emerges from the gateway to hell, seeking dominion over the altered world.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/0eFnZESdmTfXxQiWYLTSb4?utm_source=generator",
      },
      {
        title: "L.W.",
        text: `The simulated world continues to deteriorate, spiralling toward its demise.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/7mGW0YccQQZPCD1acHaClx?utm_source=generator",
      },
      {
        title: "Murder of the Universe [Disc 2]",
        text: `'The Lord Of Lightning Vs Balrog'. The Lord of Lightning vanquishes the Balrog, a powerful demonic creature.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/2MV9sGmINkvCzzbQj5vhh0?utm_source=generator",
      },
      {
        title: "Fishing for Fishies",
        text: `The last remaining unaltered human, Han-Tyumi (an anagram of Humanity), encounters Boogieman Sam, a cyborg. Han-Tyumi finds Sam repulsive.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/5DEL0SSMojInN54XnSWwR1?utm_source=generator",
        parallelToPrev: true,
      },
      {
        title: "Murder of the Universe [Disc 3]",
        text: `Han-Tyumi manipulates Boogieman Sam to create the 'Soy-Protein Munt Machine,' which he uses to bring about the destruction of the altered world.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/6ioaq9yDIYc1sWY26yd9UT?utm_source=generator",
      },
      {
        title: "Polygondwanaland",
        text: `The inhabitants of Polygondwanaland, using Tetrachromacy, manage to resist the annihilation caused by the 'Munt Machine' and escape to a new world called 'Brunswick East'.`,
        info: `This album echoes the events from 'Omnium Gatherum' through 'Infest the Rats' Nest [B-Side]', depicting the creation of the simulation and the eventual exodus of the remaining humans.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/5K3drs66QoLhSFnw4q5KFn?utm_source=generator",
      },
      {
        title: "Sketches of Brunswick East [A-Side]",
        text: `Han-Tyumi begins corrupting the minds of the inhabitants in Brunswick East, assuming a leadership role.`,
        info: `Similar to the influence of Satan over the seven individuals in "I'm In Your Mind Fuzz [B-Side]".`,
        iframeSrc:
          "https://open.spotify.com/embed/album/5rvkoNlufp1WUV5pnGuKOQ?utm_source=generator",
      },
      {
        title: "Sketches Of Brunswick East [B-Side]",
        text: `Han-Tyumi destroys Brunswick East, potentially triggering a new cycle if another instance of Nonagon Infinity is opened.`,
        info: `Similar to the events in 'Murder of the Universe [Disc 1]', the destruction of Brunswick East could lead to the emergence of a new incarnation of Han-Tyumi.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/4wxTmbq0PouQbjimGEw9E4?utm_source=generator",
      },
      {
        title: "Flying Microtonal Banana [A-Side]",
        text: `Brunswick East falls into ruin and destruction.`,
        info: `Similar to the events in 'Murder of the Universe [Disc 2]', the devastation befalls Brunswick East.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/6h0sHXieTPtHkmtHXYhau8?utm_source=generator",
      },
      {
        title: "Flying Microtonal Banana [B-Side]",
        text: `Travellers attempt to escape from the doomed Brunswick East, leading to a new cycle as they enter another simulation.`,
        info: `Similar to the themes explored in 'Polygondwanaland' and "I'm In Your Mind Fuzz", the Travellers find themselves entering a new simulation, perpetuating the cycle.`,
        iframeSrc:
          "https://open.spotify.com/embed/track/73G2yz58Faqm5GoqfGOPBK?utm_source=generator",
      },
      {
        title: "Ice, Death, Planets, Lungs, Mushrooms And Lava",
        text: `As humanity retreats into the simulation, nature begins to heal and reclaim the Earth.`,
        info: `This album takes place immediately after "Infest the Rats' Nest" from the perspective of the outside world, frozen within time as the simulations unfold.`,
        iframeSrc:
          "https://open.spotify.com/embed/album/2nPbslvl01lfELsFHTKp0s?utm_source=generatorr",
      },
    ],
  },
}
