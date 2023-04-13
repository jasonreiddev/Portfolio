import * as React from "react"
import { motion, MotionValue, useTransform } from "framer-motion"
import { ParallaxStyles as s } from "./Parallax.styles"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import {} from "gatsby-plugin-dark-mode"

export interface ParallaxProps {
  windowWidth: number
  windowHeight: number
  scrollYProgress: MotionValue<number>
  speed?: number
}

interface DotGroup {
  dotsToShowMultiplier: number
  sizeMultiplier: number
  y: MotionValue<number>
}

export const Parallax = ({
  windowWidth,
  windowHeight,
  scrollYProgress,
  speed = 100,
}: ParallaxProps) => {
  const dotsToShow = Math.floor(Math.sqrt(windowWidth * windowHeight) / 80)
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

  return (
    <s.ParallaxWrapper>
      {dotGroups.map(({ y, dotsToShowMultiplier, sizeMultiplier }) => (
        <motion.div style={{ y }}>
          <>
            {[...Array(dotsToShow * dotsToShowMultiplier)].map(() => (
              <s.Dot
                left={Math.random() * 100}
                top={Math.floor(Math.random() * windowHeight)}
                scale={Math.random() * sizeMultiplier}
              />
            ))}
          </>
        </motion.div>
      ))}
    </s.ParallaxWrapper>
  )
}
