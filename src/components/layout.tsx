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
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll()

  const [pageWidth, setPageWidth] = React.useState(0)
  const [pageHeight, setPageHeight] = React.useState(0)

  React.useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  }, [])

  const handleResize = () => {
    if (ref.current) {
      setPageWidth(ref.current.offsetWidth)
      setPageHeight(ref.current.offsetHeight)
    }
  }

  return (
    <div className={GlobalStyles} ref={ref}>
      <Slice alias="header" />
      {children}
      <Slice alias="footer" />

      <TopRocket pageHeight={pageHeight} scrollYProgress={scrollYProgress} />

      <Parallax
        pageWidth={pageWidth}
        pageHeight={pageHeight}
        scrollYProgress={scrollYProgress}
      />
    </div>
  )
}

export default Layout
