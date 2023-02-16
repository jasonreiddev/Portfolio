import { styled } from "@linaria/react"
import { BurgerIconStyles } from "../../components/BurgerIcon/BurgerIcon.styles"
import { ThemeTogglerStyles } from "../../components/ThemeToggler/ThemeToggler.styles"

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  margin: 16px 0;
  justify-content: space-between;
  gap: 16px;

  ${ThemeTogglerStyles.MotionButton} {
    margin-left: auto;
  }

  ${BurgerIconStyles.BurgerWrapper} {
    @media screen and (min-width: 40em) {
      display: none;
    }
  }
`

export const DesktopNav = styled.nav`
  display: none;
  @media screen and (min-width: 40em) {
    display: block;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    margin: 0;
    height: 100%;
  }
`

export const MobileNav = styled.nav`
  @media screen and (min-width: 40em) {
    display: none;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
`

export const HeaderStyles = {
  Container,
  DesktopNav,
  MobileNav,
}
