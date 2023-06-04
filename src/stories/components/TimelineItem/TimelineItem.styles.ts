import { styled } from "@linaria/react"
import { motion } from "framer-motion"
import { Container as ButtonListContainer } from "../../widgets/ButtonList/ButtonList.styles"

export interface TimelineItemStylesProps {}

const Circle = styled.span`
  background-color: var(--color-card-text);
  border: 3px solid var(--color-card-muted);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -42px;
  z-index: 1;
`

const ContentContainer = styled.div`
  position: relative;
  max-width: calc(100% - 32px);
  display: flex;
  gap: 12px;
  flex-direction: column;
  background-color: var(--color-card-background);
  color: var(--color-card-text);
  padding: 24px 16px 16px;
  border-radius: 16px;

  time {
    margin-left: auto;
    padding-right: 5px;
  }

  ${ButtonListContainer} {
    margin-top: 16px;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: var(--color-card-background);
    top: calc(50% - 7.5px);
    width: 15px;
    height: 15px;
    clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
    right: -7.5px;
  }
`

const MotionWrapper = styled(motion.li)`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  margin: 16px 0;

  @media screen and (min-width: 52em) {
    grid-template-columns: 1fr 1fr;

    &:nth-child(even) {
      margin: -32px 0;

      ${ContentContainer} {
        grid-column-start: 2;
        margin-left: 32px;

        &::after {
          right: unset;
          left: -7.5px;
        }
      }

      ${Circle} {
        right: unset;
        left: -42px;
      }
    }

    :first-child {
      margin-top: 32px;
    }

    :last-child {
      margin-bottom: 32px;
    }
  }
`

const Heading = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Tag = styled.span`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  text-transform: uppercase;
  top: 18px;
  left: 12px;
  letter-spacing: 1px;
`
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  top: 18px;
  left: 12px;
`

const Text = styled.p`
  margin: 0;
  width: 100%;
`

const Info = styled.p`
  color: var(--color-card-active);
  font-weight: bold;
  margin: 0;
`

export const TimelineItemStyles = {
  MotionWrapper,
  ContentContainer,
  Heading,
  Tag,
  Title,
  Text,
  Info,
  Circle,
}
