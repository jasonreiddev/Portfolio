import * as React from "react"
import { motion } from "framer-motion"
import { BrandLogoStyles as s, BrandLogoStylesProps } from "./BrandLogo.styles"
import { useState } from "react"

export interface BrandLogoProps {
  animate?: boolean
  size?: BrandLogoStylesProps["size"]
  card?: BrandLogoStylesProps["card"]
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

/* 256px 'Roboto Medium' */
export const BrandLogo = ({
  animate = false,
  size = "medium",
  card,
}: BrandLogoProps) => {
  const [isHovered, setHovered] = useState(false)

  return (
    <s.LogoWrapper size={size} card={card}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="JRBrandLogo"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        initial={animate ? "hidden" : ""}
        animate={animate ? "visible" : ""}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <g id="JR">
          <motion.path
            d="M108.583875,62.584366c-.490857,86.145539,2.044474,93.508406.368144,136.581176-1.769099,45.45644-90.472933,54.15325-90.56326-4.41772"
            fill="none"
            stroke="#231f20"
            strokeWidth="24"
            id="J"
            variants={draw}
            custom={0}
          />
          <motion.path
            d="M174.481531,243.710885c0,0,0-169.345932,0-169.345932h56.325928c58.266962-.736287,56.409832,84.672966,0,84.672966h-55.221501h57.798503c21.504583,35.47155,47.126333,77.286048,47.122346,84.672966"
            transform="translate(.000004-.368143)"
            fill="none"
            stroke="#231f20"
            strokeWidth="24"
            id="R"
            variants={draw}
            custom={1}
          />
        </g>
        <g id="JR-Active">
          <motion.path
            d="M108.583875,62.584366c-.490857,86.145539,2.044474,93.508406.368144,136.581176-1.769099,45.45644-90.472933,54.15325-90.56326-4.41772"
            fill="none"
            stroke="#683799"
            strokeWidth="24"
            id="J-Hover"
            variants={draw}
            initial={animate ? false : "visible"}
            animate={isHovered || !animate ? "visible" : "hidden"}
            custom={-1}
          />
          <motion.path
            d="M174.481531,243.710885c0,0,0-169.345932,0-169.345932h56.325928c58.266962-.736287,56.409832,84.672966,0,84.672966h-55.221501h57.798503c21.504583,35.47155,47.126333,77.286048,47.122346,84.672966"
            transform="translate(.000004-.368143)"
            fill="none"
            stroke="#683799"
            strokeWidth="24"
            id="R-Hover"
            variants={draw}
            initial={animate ? false : "visible"}
            animate={isHovered || !animate ? "visible" : "hidden"}
            custom={0}
          />
        </g>
      </motion.svg>
    </s.LogoWrapper>
  )
}
