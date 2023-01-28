import { styled } from "@linaria/react"
import { motion } from "framer-motion"

const MotionButton = styled(motion.button)`
  background: unset;
  border: 0;
  padding: 0;
  cursor: pointer;
  line-height: 0;

  svg {
    color: var(--color-text);
    pointer-events: none;
  }
`

export const ThemeTogglerStyles = {
  MotionButton,
}
