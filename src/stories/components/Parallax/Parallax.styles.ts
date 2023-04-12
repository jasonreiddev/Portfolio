import { styled } from "@linaria/react"

const ParallaxWrapper = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
  pointer-events: none;
`

export interface DotStylesProps {
  left: number
  top: number
  scale: number
}

const Dot = styled("span")<DotStylesProps>`
  position: absolute;

  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-active);
  box-shadow: 0 0
    ${(p: DotStylesProps) => {
      return p.scale * 60
    }}px
    8px var(--color-active);

  left: ${(p: DotStylesProps) => {
    return p.left
  }}vw;

  top: ${(p: DotStylesProps) => {
    return p.top
  }}px;

  transform: scale(
    ${(p: DotStylesProps) => {
      return p.scale
    }}
  );
`

export const ParallaxStyles = {
  ParallaxWrapper,
  Dot,
}
