import { styled } from "@linaria/react"

const Container = styled.h2`
  margin-bottom: 16px;
  font-family: "DM Sans", sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media screen and (min-width: 52em) {
    font-size: 48px;
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
