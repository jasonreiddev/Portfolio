import { styled } from "@linaria/react"
import { motion } from "framer-motion"
import { BurgerIconStyles } from "../../components/BurgerIcon/BurgerIcon.styles"
import { ThemeTogglerStyles } from "../../components/ThemeToggler/ThemeToggler.styles"

export const Container = styled.header`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 16px;
    align-items: center;
    margin: 0;
    height: 100%;

    li {
      font-family: "DM Sans", sans-serif;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.02em;
      font-size: 20px;

      a {
        text-decoration: none;
        color: var(--color-text);
        cursor: pointer;

        &:hover {
          color: var(--color-active);
        }
      }
    }
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
  gap: 16px;

  ${BurgerIconStyles.BurgerWrapper} {
    position: relative;
    transform: translateY(2px);
  }

  ${ThemeTogglerStyles.MotionButton} {
    margin-left: auto;
  }

  @media screen and (min-width: 40em) {
    ${ThemeTogglerStyles.MotionButton} {
      margin-left: unset;
    }

    ${BurgerIconStyles.BurgerWrapper} {
      /* Used instead of "display: none" for framer motion */
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }
  }
`

export const DesktopNav = styled.nav`
  display: none;
  @media screen and (min-width: 40em) {
    display: block;
  }
`

export const MobileNav = styled(motion.nav)`
  height: 100vh;
  gap: 16px;
  position: fixed;
  background: var(--color-card-background);
  width: 100%;
  z-index: 2;
  padding: 16px;
  @media screen and (min-width: 40em) {
    display: none;
  }
  ul {
    flex-direction: column;

    li {
      font-size: 24px;
      a {
        color: var(--color-card-text);

        &:hover {
          color: var(--color-card-active);
        }
      }
    }
  }
`

export const HeaderStyles = {
  Container,
  Header,
  DesktopNav,
  MobileNav,
}
