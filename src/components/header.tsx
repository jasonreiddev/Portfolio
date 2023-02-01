import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  VisuallyHidden,
} from "./ui"
import { desktopHeaderNavWrapper } from "./header.css"
import NavItemGroup, { NavItemGroupNavItem } from "./nav-item-group"
import { ThemeToggler } from "../stories/components/ThemeToggler/ThemeToggler"
import { BrandLogo } from "../stories/components/BrandLogo/BrandLogo"

type NavItem = {
  id: string
  navItemType: "Link"
  href: string
  text: string
}

type NavItemGroup = {
  id: string
  navItemType: "Group"
  name: string
  navItems: NavItemGroupNavItem[]
}

interface HeaderData {
  layout: {
    header: {
      id: string
      navItems: NavItem[] | NavItemGroup[]
      cta: {
        id: string
        href: string
        text: string
      }
    }
  }
}

export default function Header() {
  const data: HeaderData = useStaticQuery(graphql`
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

  return (
    <header>
      <Container className={desktopHeaderNavWrapper}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <nav>
            <FlexList gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    {navItem.navItemType === "Group" ? (
                      <NavItemGroup
                        name={navItem.name}
                        navItems={navItem.navItems}
                      />
                    ) : (
                      <NavLink
                        to={navItem.href}
                        className="hover-footer-header hide-mobile"
                      >
                        {navItem.text}
                      </NavLink>
                    )}
                  </li>
                ))}
            </FlexList>
          </nav>
          <div>
            {cta && <Button to={cta.href}>{cta.text}</Button>}{" "}
            {<ThemeToggler />}
          </div>
        </Flex>
      </Container>
    </header>
  )
}
