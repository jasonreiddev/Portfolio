import * as React from "react"
import { GlobalStyles } from "../global.styles"
import { Slice } from "gatsby"
import { TopRocket } from "../../stories/components/TopRocket/TopRocket"
import { motion, useScroll } from "framer-motion"
import { Parallax } from "../../stories/components/Parallax/Parallax"
import { LayoutStyles as s } from "./Layout.styles"

type children = React.ReactNode & {
  type: () => any
  props: {
    location: {
      pathname: string
    }
  }
}

interface LayoutProps {
  children?: children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll()

  const [firstLoad, setFirstLoad] = React.useState(true)
  const [pageWidth, setPageWidth] = React.useState(0)
  const [pageHeight, setPageHeight] = React.useState(0)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setFirstLoad(false)
    handleResize()
    window.addEventListener("resize", handleResize)
  }, [])

  const handleResize = () => {
    if (ref.current) {
      let width = ref.current.offsetWidth
      setIsMobile(width < 640)
      setPageWidth(width)
      setPageHeight(ref.current.offsetHeight)
    }
  }

  // Gets type, unique for 404, page, offline-plugin ect
  let page = children.type.name.toLowerCase()
  // If type is page, u for complied
  if (page == "page" || page == "u") {
    let path = children.props.location.pathname.split("/")[1]
    page = path ? `page.${path}` : "homepage"
  }

  const xTransform = isMobile ? 0 : page == "homepage" ? -300 : 300

  return (
    <s.LayoutWrapper className={GlobalStyles} ref={ref}>
      <s.ContentWrapper>
        <Slice alias="header" />

        <motion.div
          key={page}
          initial={firstLoad ? null : { x: xTransform, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: xTransform, opacity: 0 }}
          transition={
            isMobile
              ? { ease: "linear", duration: 0.2 }
              : { type: "spring", stiffness: 260, damping: 20 }
          }
        >
          <Parallax
            pageWidth={pageWidth}
            pageHeight={pageHeight}
            scrollYProgress={scrollYProgress}
            seed={page}
          />
          {children}
        </motion.div>
      </s.ContentWrapper>
      <Slice alias="footer" />

      <TopRocket pageHeight={pageHeight} scrollYProgress={scrollYProgress} />
    </s.LayoutWrapper>
  )
}

export default Layout
