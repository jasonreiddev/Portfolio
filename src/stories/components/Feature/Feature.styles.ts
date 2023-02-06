import { styled } from "@linaria/react"
import { motion } from "framer-motion"

export interface FeatureListStylesProps {
  flip: boolean
}

const MotionWrapper = styled(motion.section)`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 64px;

  @media screen and (min-width: 40em) {
    padding: 64px;
  }
`

const MotionImageWrapper = styled(motion.div)`
  img {
    max-width: 480px;
  }
`

const MotionContentWrapper = styled(motion.div)``

const Container = styled.div<FeatureListStylesProps>`
  display: grid;
  @media screen and (min-width: 40em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  ${MotionContentWrapper} {
    @media screen and (min-width: 40em) {
      order: ${(p: FeatureListStylesProps) => {
        return p.flip ? `-1` : `1`
      }};
    }
  }
`

const Lead = styled.p`
  font-size: 18px;
  line-height: 1.65em;
`

export const FeatureStyles = {
  MotionWrapper,
  Container,
  MotionImageWrapper,
  MotionContentWrapper,
  Lead,
}
