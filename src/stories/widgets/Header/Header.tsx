import React from "react"

import { HeaderStyles as s } from "./Header.styles"

import { ThemeToggler } from "../../components/ThemeToggler/ThemeToggler"
import { BrandLogo } from "../../components/BrandLogo/BrandLogo"
import { BurgerIcon } from "../../components/BurgerIcon/BurgerIcon"
import { Button } from "../../components/Button/Button"
import { Link } from "gatsby"

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
  // navItems: NavItemGroupNavItem[]
}

export interface HeaderProps {
  navItems: NavItem[] | NavItemGroup[]
  cta: {
    id: string
    href: string
    text: string
  }
}

export const Header = ({ navItems, cta }: HeaderProps) => {
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <>
      <s.Container>
        <BrandLogo />

        <s.DesktopNav>
          <ul>
            {navItems?.map((navItem) => (
              <li key={navItem.id}>
                {navItem.navItemType === "Group" ? (
                  // <NavItemGroup
                  //   name={navItem.name}
                  //   navItems={navItem.navItems}
                  // />
                  <></>
                ) : (
                  <Link to={navItem.href}>{navItem.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </s.DesktopNav>

        {cta && (
          <Button
            href={cta.href}
            text={cta.text}
            idPrefix={"header"}
            id={"cta"}
            primary={!isOpen}
            size="small"
          />
        )}

        <ThemeToggler />

        <BurgerIcon onClick={() => setOpen(!isOpen)} open={isOpen} />
      </s.Container>
      {isOpen && (
        <s.MobileNav>
          <ul>
            {navItems?.map((navItem) => (
              <li key={navItem.id}>
                {navItem.navItemType === "Group" ? (
                  // <NavItemGroup
                  //   name={navItem.name}
                  //   navItems={navItem.navItems}
                  // />
                  <></>
                ) : (
                  <Link to={navItem.href}>{navItem.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </s.MobileNav>
      )}
    </>
  )
}
