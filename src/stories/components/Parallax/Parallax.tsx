import * as React from "react"
import { motion, MotionValue, useTransform } from "framer-motion"
import { ParallaxStyles as s } from "./Parallax.styles"
import seedrandom from "seedrandom"

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
      {dotGroups.map(({ y, dotsToShowMultiplier, sizeMultiplier }) => (
        <motion.div style={{ y }}>
          <>
            {[...Array(dotsToShow * dotsToShowMultiplier)].map(() => (
              <s.Dot
                left={rng.quick() * 100}
                top={Math.floor(rng.quick() * pageHeight)}
                scale={rng.quick() * sizeMultiplier}
              />
            ))}
          </>
        </motion.div>
      ))}
    </s.ParallaxWrapper>
  )
}
