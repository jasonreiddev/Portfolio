import { styled } from "@linaria/react"

export interface ButtonListStylesProps {
  align: "left" | "center" | "right"
}

export const Container = styled.ul<ButtonListStylesProps>`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  gap: 16px;

  justify-content: ${(p: ButtonListStylesProps) => {
    switch (p.align) {
      case "left": {
        return `
        flex-start
        `
      }
      case "center": {
        return `
        center`
      }
      case "right": {
        return `
        flex-end`
      }
    }
  }};
`
export const ButtonWrapper = styled.li``

export const ButtonListStyles = {
  Container,
  ButtonWrapper,
}
