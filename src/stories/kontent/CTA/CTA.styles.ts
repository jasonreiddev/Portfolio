import { styled } from "@linaria/react"

export interface ButtonListStylesProps {}

const Wrapper = styled.div<ButtonListStylesProps>`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;

  @media screen and (min-width: 52em) {
    padding: 64px 32px;
  }
`

const Container = styled.div<ButtonListStylesProps>`
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-background);
  border-radius: 24px;
  padding-top: 32px;
  padding-bottom: 32px;

  @media screen and (min-width: 40em) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const Lead = styled.p<ButtonListStylesProps>`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-align: center;

  @media screen and (min-width: 52em) {
    font-size: 32px;
  }
`

const ImageWrapper = styled.div<ButtonListStylesProps>``

export const CTAStyles = {
  Wrapper,
  Container,
  Lead,
  ImageWrapper,
}
