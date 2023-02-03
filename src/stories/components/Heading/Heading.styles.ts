import { styled } from "@linaria/react"

export interface HeadingStylesProps {
  subheading: boolean
}

const Container = styled.h2<HeadingStylesProps>`
  margin-bottom: 16px;
  font-family: "DM Sans", sans-serif;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;

  font-size: ${(p: HeadingStylesProps) => {
    return p.subheading ? "26px" : "32px"
  }};

  @media screen and (min-width: 52em) {
    font-size: ${(p: HeadingStylesProps) => {
      return p.subheading ? "32px" : "48px"
    }};
  }
`

const Kicker = styled.div`
  margin-bottom: 8px;
  font-family: DM Mono, Menlo, monospace;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const HeadingStyles = {
  Container,
  Kicker,
}
