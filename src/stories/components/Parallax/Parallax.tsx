import * as React from "react"
import { motion, MotionValue, useTransform } from "framer-motion"
import { ParallaxStyles as s } from "./Parallax.styles"

export interface ParallaxProps {
  windowWidth: number
  windowHeight: number
  scrollYProgress: MotionValue<number>
}

export const Parallax = ({
  windowWidth,
  windowHeight,
  scrollYProgress,
}: ParallaxProps) => {
  const speed = 100
  const dotsToShow = Math.floor(Math.sqrt((windowWidth * windowHeight) / 200))
  const y = useTransform(scrollYProgress, (value) => -value * speed)

  return (
    <s.ParallaxWrapper>
      <motion.div style={{ y }}>
        <>
          {[...Array(dotsToShow)].map(() => (
            <s.Dot
              left={Math.floor(Math.random() * 100)}
              top={Math.floor(Math.random() * windowHeight)}
              scale={Math.random()}
            />
          ))}
        </>
      </motion.div>
    </s.ParallaxWrapper>
  )
}
