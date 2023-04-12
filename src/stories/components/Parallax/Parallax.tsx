import * as React from "react"
import { motion, MotionValue, useTransform } from "framer-motion"
import { ParallaxStyles as s } from "./Parallax.styles"

export interface ParallaxProps {
  windowHeight: number
  scrollYProgress: MotionValue<number>
}

export const Parallax = ({ windowHeight, scrollYProgress }: ParallaxProps) => {
  const speed = 100

  const y = useTransform(scrollYProgress, (value) => -value * speed)

  return (
    <s.ParallaxWrapper>
      <motion.div style={{ y }}>
        <>
          {[...Array(100)].map(() => (
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
