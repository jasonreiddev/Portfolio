import { styled } from "@linaria/react"

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;

  list-style-type: none;
  padding: 0;

  &::after {
    background-color: var(--color-card-background);
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
    left: calc(100% - 18px);
    z-index: -1;
    @media screen and (min-width: 52em) {
      left: calc(50% - 2px);
    }
  }
`
export const TimelineStyles = {
  Container,
}
