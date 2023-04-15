import React from "react"
import { GatsbyBrowser, GatsbySSR } from "gatsby"
import Layout from "./src/components/layout"
import { AnimatePresence } from "framer-motion"

type WrapPageElement =
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"]

export const wrapPageElement: WrapPageElement = ({ element }: any) => {
  return (
    <AnimatePresence initial={false}>
      <Layout>{element}</Layout>
    </AnimatePresence>
  )
}
