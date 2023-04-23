import { HeaderStyles as s } from "./Header.styles"

import { ThemeToggler } from "../../components/ThemeToggler/ThemeToggler"
import { BrandLogo } from "../../components/BrandLogo/BrandLogo"
import { BurgerIcon } from "../../components/BurgerIcon/BurgerIcon"
import { Button } from "../../components/Button/Button"
import handleRedirect from "../../../helpers/handleRedirect"
import { useEffect, useState, MouseEvent } from "react"

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
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  const handleMobileClick = (e: MouseEvent, to: string) => {
    setOpen(false)
    handleRedirect(e, to)
  }

  return (
    <s.Container>
      <s.Header>
        <a
          onClick={(e) => handleMobileClick(e, "/")}
          href="/"
          aria-label="Home"
        >
          <BrandLogo />
        </a>
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
                  <a
                    onClick={(e) => handleRedirect(e, navItem.href)}
                    href={navItem.href}
                  >
                    {navItem.text}
                  </a>
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
      </s.Header>
      <s.MobileNav
        initial={{ right: "-100%" }}
        animate={{ right: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          {navItems?.map((navItem) => (
            <li key={navItem.id}>
              {navItem.navItemType === "Group" ? (
                // TODO Migrate "NavItemGroup"
                // <NavItemGroup
                //   name={navItem.name}
                //   navItems={navItem.navItems}
                // />
                <></>
              ) : (
                <a
                  onClick={(e) => handleMobileClick(e, navItem.href)}
                  href={navItem.href}
                >
                  {navItem.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </s.MobileNav>
    </s.Container>
  )
}
