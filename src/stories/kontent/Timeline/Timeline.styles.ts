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
  border-radius: 24px;
  overflow: hidden;

  padding: 48px;

  @media screen and (min-width: 40em) {
    padding: 64px;
  }
`

const ContentWrapper = styled.div`
  @media screen and (min-width: 64em) {
    flex-grow: 0;
  }
`

const Lead = styled.p`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.65;
  text-align: left;
`

export const CTAStyles = {
  MotionWrapper,
  Container,
  ContentWrapper,
  Lead,
}
