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
  border-radius: 24px;
  overflow: hidden;
  background-color: var(--color-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  padding: 32px;
`

const ContentContainer = styled.div``

const Lead = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.65;
  text-align: left;
`

export const FeatureListStyles = {
  MotionWrapper,
  ContentWrapper,
  ContentContainer,
  Container,
  Lead,
}
