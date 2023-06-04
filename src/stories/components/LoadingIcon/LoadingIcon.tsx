import { motion } from "framer-motion"

import {
  LoadingIconStyles as s,
  LoadingIconStylesProps,
} from "./LoadingIcon.styles"

export interface LoadingIconProps {
  size?: LoadingIconStylesProps["size"]
  card?: LoadingIconStylesProps["card"]
}

export const LoadingIcon = ({ size = "medium", card }: LoadingIconProps) => {
  return (
    <s.LoadingWrapper size={size} card={card}>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{
          duration: 3,
          ease: [0, 0.2, 0.8, 1],
          repeat: Infinity,
        }}
      />
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{
          delay: 1.5,
          duration: 3,
          ease: [0, 0.2, 0.8, 1],
          repeat: Infinity,
        }}
      />
    </s.LoadingWrapper>
  )
}
