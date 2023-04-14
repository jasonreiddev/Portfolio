import React from "react"
import { GatsbyBrowser, GatsbySSR } from "gatsby"
import Layout from "./src/components/layout"

type WrapPageElement =
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"]

export const wrapPageElement: WrapPageElement = ({ element }: any) => {
  return <Layout>{element}</Layout>
}
