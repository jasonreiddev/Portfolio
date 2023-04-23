import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import seedrandom from "seedrandom"

import { ParallaxStyles as s } from "./Parallax.styles"

export interface ParallaxProps {
  pageWidth: number
  pageHeight: number
  scrollYProgress: MotionValue<number>
  speed?: number
  seed?: string
}

interface DotGroup {
  dotsToShowMultiplier: number
  sizeMultiplier: number
  y: MotionValue<number>
}

export const Parallax = ({
  pageWidth,
  pageHeight,
  scrollYProgress,
  speed = 100,
  seed = "seed",
}: ParallaxProps) => {
  // Storybook
  if (scrollYProgress === undefined) {
    const { scrollY } = useScroll()
    scrollYProgress = scrollY
  }

  const dotsToShow = Math.floor(Math.sqrt(pageWidth * pageHeight) / 80)
  const distances = [1, 2, 3]
  const dotGroups = distances.map(
    (x) =>
      ({
        y: useTransform(
          scrollYProgress,
          (value) => -value * speed * (3 - x + 1)
        ),
        dotsToShowMultiplier: x,
        sizeMultiplier: 3 - x + 1,
      } as DotGroup)
  )
  const rng = new seedrandom(seed)

  return (
    <s.ParallaxWrapper>
      {dotGroups.map(({ y, dotsToShowMultiplier, sizeMultiplier }, i) => (
        <motion.div style={{ y }} key={`dot-${seed}-${i}`}>
          <>
            {[...Array(dotsToShow * dotsToShowMultiplier)].map((x, index) => (
              <s.Dot
                left={rng.quick() * 100}
                top={Math.floor(rng.quick() * pageHeight)}
                scale={rng.quick() * sizeMultiplier}
                key={`dot-${seed}-${i}-${index}`}
              />
            ))}
          </>
        </motion.div>
      ))}
    </s.ParallaxWrapper>
  )
}
