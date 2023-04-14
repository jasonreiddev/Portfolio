import * as React from "react"
import { GlobalStyles } from "../global.styles"
import { Slice } from "gatsby"
import { TopRocket } from "../stories/components/TopRocket/TopRocket"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import { Parallax } from "../stories/components/Parallax/Parallax"

type children = React.ReactNode & {
  key: string
}

interface LayoutProps {
  children?: children
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

  const path = children.key

  return (
    <div className={GlobalStyles} ref={ref}>
      <Slice alias="header" />
      <motion.div
        key={path}
        initial={{ x: path == "/" ? -300 : 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: path == "/" ? 300 : -300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Parallax
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          scrollYProgress={scrollYProgress}
          seed={path}
        />
        {children}
      </motion.div>

      <Slice alias="footer" />

      <TopRocket pageHeight={pageHeight} scrollYProgress={scrollYProgress} />
    </div>
  )
}

export default Layout
