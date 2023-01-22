import * as React from "react"
import { GlobalStyles } from "../global.styles"
import { Slice } from "gatsby"
interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={GlobalStyles}>
      <Slice alias="header" />
      {children}
      <Slice alias="footer" />
    </div>
  )
}

export default Layout
