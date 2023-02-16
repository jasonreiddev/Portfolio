import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Header as HeaderWidget,
  HeaderProps as HeaderWidgetProps,
} from "../../widgets/Header/Header"

export interface HeaderProps {
  layout: {
    header: HeaderWidgetProps
  }
}

export default function Header() {
  const data: HeaderProps = useStaticQuery(graphql`
    query {
      layout {
        header {
          id
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
            }
            ... on NavItemGroup {
              name
              navItems {
                id
                href
                text
                description
                icon {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
          cta {
            id
            href
            text
          }
        }
      }
    }
  `)

  const { navItems, cta } = data.layout.header

  return <HeaderWidget navItems={navItems} cta={cta} />
}
