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
  width: 100%;
  // TODO opacity with --color-card-background, requires transparent image
  background-color: var(--color-card-background);
  color: var(--color-card-text);
  border-radius: 24px;
  overflow: hidden;
  text-align: center;
`

const ContentWrapper = styled.div`
  padding: 48px 48px 0;

  @media screen and (min-width: 40em) {
    padding: 64px 64px 0;
  }
`

const Lead = styled.p`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-align: center;

  @media screen and (min-width: 52em) {
    font-size: 32px;
  }
`

const MotionImageWrapper = styled(motion.div)``

export const CTAStyles = {
  MotionWrapper,
  Container,
  ContentWrapper,
  Lead,
  MotionImageWrapper,
}
