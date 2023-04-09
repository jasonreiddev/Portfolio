import * as React from "react"
import { motion } from "framer-motion"
import { TopRocketStyles as s, TopRocketStylesProps } from "./TopRocket.styles"
import { useState } from "react"

export interface TopRocketProps {
  open: boolean
  onClick: () => void
  size?: TopRocketStylesProps["size"]
  card?: TopRocketStylesProps["card"]
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

export const TopRocket = ({
  open = false,
  onClick,
  size = "medium",
  card,
}: TopRocketProps) => {
  return (
    <s.TopRocketWrapper size={size} card={card}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="TopRocketMenu"
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
    </s.TopRocketWrapper>
  )
}
