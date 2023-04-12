import * as React from "react"
import { GlobalStyles } from "../global.styles"
import { Slice } from "gatsby"
import { TopRocket } from "../stories/components/TopRocket/TopRocket"
import { useScroll, useVelocity } from "framer-motion"
import { Parallax } from "../stories/components/Parallax/Parallax"
interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll()
  const scrollVelocity = useVelocity(scrollYProgress)

  const [show, setShow] = React.useState(false)
  const [takeOff, setTakeOff] = React.useState(false)
  const [hideReset, setHideReset] = React.useState(false)

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

  const [windowWidth, setWindowWidth] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(0)

  React.useEffect(() => {
    setWindowWidth(window.outerWidth)
    setWindowHeight(window.outerHeight)
    window.addEventListener("resize", handleResize)
  }, [])

  const handleResize = () => {
    setWindowWidth(window.outerWidth)
    setWindowHeight(window.outerHeight)
  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

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

  return (
    <div className={GlobalStyles}>
      <Slice alias="header" />
      {children}
      <Slice alias="footer" />

      <TopRocket
        windowHeight={windowHeight}
        onClick={() => {
          handleClick()
        }}
        show={show}
        takeOff={takeOff}
        hideReset={hideReset}
      />

      <Parallax
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        scrollYProgress={scrollYProgress}
      />
    </div>
  )
}

export default Layout
