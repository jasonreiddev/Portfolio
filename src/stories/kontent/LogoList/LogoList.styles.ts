import { styled } from "@linaria/react"
import { motion } from "framer-motion"

const MotionWrapper = styled(motion.div)`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0;

  @media screen and (min-width: 52em) {
    padding: 64px 32px;
  }
`

const Container = styled.div`
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogosContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 32px;
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 16px;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(5em, 1fr));

  @media screen and (min-width: 40em) {
    grid-template-columns: repeat(3, minmax(5em, 1fr));
  }

  @media screen and (min-width: 64em) {
    grid-template-columns: repeat(6, minmax(5em, 1fr));
  }
`

const MotionListItem = styled(motion.li)``

const Lead = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.65;
  text-align: left;
`

export const LogoListStyles = {
  MotionWrapper,
  LogosContainer,
  Container,
  Lead,
  MotionListItem,
}
