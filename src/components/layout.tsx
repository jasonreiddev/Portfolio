import * as React from "react"
import { GlobalStyles } from "../global.styles"
import { Slice } from "gatsby"
import { TopRocket } from "../stories/components/TopRocket/TopRocket"
import { useScroll } from "framer-motion"
import { Parallax } from "../stories/components/Parallax/Parallax"
interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll()

  const [windowWidth, setWindowWidth] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(0)

  React.useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  }, [])

  const handleResize = () => {
    setWindowWidth(window.outerWidth)
    setWindowHeight(window.outerHeight)
  }

  return (
    <div className={GlobalStyles}>
      <Slice alias="header" />
      {children}
      <Slice alias="footer" />

      <TopRocket
        windowHeight={windowHeight}
        scrollYProgress={scrollYProgress}
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
