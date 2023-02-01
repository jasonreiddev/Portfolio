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
  background-color: var(--color-card-background);
  color: var(--color-card-text);
  border-radius: 24px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 48px;

  @media screen and (min-width: 40em) {
    padding: 64px;
  }
`

const ContentWrapper = styled.div`
  width: 50%;
  flex-grow: 1;
  z-index: 1;
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

const StatContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  li {
    list-style: none;
  }
`

const StatWrapper = styled.div`
  padding: 8px;
`

const Stat = styled.span`
  font-family: "DM Mono", "Menlo", monospace;
  margin-bottom: 16px;
  font-weight: 500;
  line-height: 0.8;
  letter-spacing: -0.02em;
  text-align: left;
  font-size: 48px;
`

const StatLabel = styled.span`
  margin-bottom: 16px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-align: center;
  font-size: 24px;
`

const MotionImageWrapper = styled(motion.div)`
  width: 50%;
  display: none;
  z-index: 0;

  @media screen and (min-width: 64em) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

export const CTAStyles = {
  MotionWrapper,
  Container,
  ContentWrapper,
  Lead,
  MotionImageWrapper,
  StatContainer,
  StatWrapper,
  Stat,
  StatLabel,
}
