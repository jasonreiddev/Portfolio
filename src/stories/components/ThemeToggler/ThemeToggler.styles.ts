import { styled } from "@linaria/react"

const Button = styled.button`
  background: unset;
  border: 0;
  padding: 0;
  cursor: pointer;

  svg {
    color: var(--color-text);
    pointer-events: none;
  }
`

export const ThemeTogglerStyles = {
  Button,
}
