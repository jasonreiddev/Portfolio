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
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--color-card-background-opaque);
  color: var(--color-card-text);
  padding: 16px;

  time {
    transform: translate(6px, -10px);
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

const Tag = styled.span`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  text-transform: uppercase;
  position: absolute;
  top: 6px;
  left: 12px;
  letter-spacing: 1px;
`

const Text = styled.p`
  white-space: pre-wrap;
  margin: 0;
  width: 100%;
`

export const TimelineItemStyles = {
  MotionWrapper,
  ContentContainer,
  Tag,
  Text,
  Circle,
}
