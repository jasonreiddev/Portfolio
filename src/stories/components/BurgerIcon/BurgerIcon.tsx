import { motion } from "framer-motion"

import {
  BurgerIconStyles as s,
  BurgerIconStylesProps,
} from "./BurgerIcon.styles"

export interface BurgerIconProps {
  open: boolean
  onClick: () => void
  size?: BurgerIconStylesProps["size"]
  card?: BurgerIconStylesProps["card"]
}

const initial = {
  rotate: 0,
  translateY: 0,
  opacity: 1,
}
const top = {
  rotate: 45,
  translateY: 150,
}

const center = {
  opacity: 0,
}

const bottom = {
  rotate: -45,
  translateY: -150,
}

export const BurgerIcon = ({
  open = false,
  onClick,
  size = "medium",
  card,
}: BurgerIconProps) => {
  return (
    <s.BurgerWrapper size={size} card={card}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="BurgerMenu"
        viewBox="0 0 300 300"
        onClick={onClick}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.line
          x1="0"
          y1="0"
          x2="300"
          y2="0"
          initial={initial}
          animate={open ? top : initial}
        />
        <motion.line
          x1="0"
          y1="150"
          x2="300"
          y2="150"
          initial={initial}
          animate={open ? center : initial}
        />
        <motion.line
          x1="0"
          y1="300"
          x2="300"
          y2="300"
          initial={initial}
          animate={open ? bottom : initial}
        />
      </motion.svg>
    </s.BurgerWrapper>
  )
}
