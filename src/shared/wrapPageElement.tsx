import { GatsbyBrowser, GatsbySSR } from "gatsby"
import { AnimatePresence } from "framer-motion"
import Layout from "./Layout/Layout"

type WrapPageElement =
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"]

export const wrapPageElement: WrapPageElement = ({ element }: any) => {
  return (
    <AnimatePresence>
      <Layout>{element}</Layout>
    </AnimatePresence>
  )
}
