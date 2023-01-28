import { styled } from "@linaria/react"

const Wrapper = styled("div")``

const Container = styled("span")`
  display: inline-grid;
  justify-items: center;
  width: fit-content;
`

const Hidden = styled("span")`
  opacity: 0;
  grid-row: 1;
  grid-column: 1;
`

const Visible = styled("span")`
  grid-row: 1;
  grid-column: 1;
`

export const AnimatedNumberStyles = {
  Container,
  Wrapper,
  Hidden,
  Visible,
}
