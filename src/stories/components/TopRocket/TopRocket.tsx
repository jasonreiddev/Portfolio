import * as React from "react"
import { motion, MotionValue, useVelocity } from "framer-motion"
import { TopRocketStyles as s, TopRocketStylesProps } from "./TopRocket.styles"
import { RiRocketLine } from "react-icons/ri"
import { TbFlame } from "react-icons/tb"

export interface TopRocketProps {
  windowHeight: number
  scrollYProgress: MotionValue<number>
  size?: TopRocketStylesProps["size"]
  card?: TopRocketStylesProps["card"]
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const TopRocket = ({
  windowHeight,
  size = "medium",
  card,
  scrollYProgress,
}: TopRocketProps) => {
  const [show, setShow] = React.useState(false)
  const [takeOff, setTakeOff] = React.useState(false)
  const [hideReset, setHideReset] = React.useState(false)

  const scrollVelocity = useVelocity(scrollYProgress)

  React.useEffect(() => {
    return scrollVelocity.onChange((latestVelocity) => {
      if (latestVelocity < 0 && window.pageYOffset == 0) {
        setShow(false)
      }

      if (latestVelocity > 0) {
        setShow(true)
      }
    })
  }, [scrollVelocity])

  const handleClick = async () => {
    window.scrollTo(0, 0)
    setTakeOff(true)
    setHideReset(true)

    await delay(2000)
    setTakeOff(false)
    setShow(false)

    await delay(1)
    setHideReset(false)
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
    translateY: -windowHeight,
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
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      >
        <RiRocketLine
          onClick={() => handleClick()}
          aria-label="Scroll to Top"
          title="Scroll to Top"
        />
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
