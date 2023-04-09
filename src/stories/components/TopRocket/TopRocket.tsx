import * as React from "react"
import { motion } from "framer-motion"
import { TopRocketStyles as s, TopRocketStylesProps } from "./TopRocket.styles"
import { RiRocketLine } from "react-icons/ri"
import { TbFlame } from "react-icons/tb"

export interface TopRocketProps {
  takeOff: boolean
  show: boolean
  hideReset: boolean
  onClick: () => void
  size?: TopRocketStylesProps["size"]
  card?: TopRocketStylesProps["card"]
}

const belowPage = {
  opacity: 1,
  translateY: +200,
}

const onPage = {
  opacity: 1,
  translateY: 0,
}

const abovePage = {
  opacity: 1,
  translateY: -window.innerHeight,
}

const off = {
  opacity: 0,
  scale: 0,
  translateY: -3,
}

const on = {
  opacity: 1,
  scale: 1,
  translateY: 0,
}

export const TopRocket = ({
  show = false,
  takeOff = false,
  hideReset = true,
  onClick,
  size = "medium",
  card,
}: TopRocketProps) => {
  return (
    <s.TopRocketWrapper size={size} card={card}>
      <motion.div
        transition={
          show
            ? takeOff
              ? { ease: "easeIn", duration: 1 }
              : { ease: "easeOut", duration: 2 }
            : { duration: hideReset ? 0 : 2 }
        }
        initial={show ? onPage : belowPage}
        animate={takeOff ? abovePage : show ? onPage : belowPage}
      >
        <RiRocketLine onClick={onClick} aria-label="Scroll to top" />
        <motion.span
          transition={
            takeOff
              ? { ease: "easeIn", duration: 0.2 }
              : { ease: "easeOut", duration: 0 }
          }
          initial={off}
          animate={takeOff ? on : off}
        >
          <TbFlame />
        </motion.span>
      </motion.div>
    </s.TopRocketWrapper>
  )
}
