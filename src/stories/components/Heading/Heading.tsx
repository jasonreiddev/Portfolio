import { HeadingStyles as s } from "./Heading.styles"

export interface HeadingProps {
  title: string
  kicker: string
  subheading?: boolean
}

export const Heading = ({ title, kicker, subheading }: HeadingProps) => {
  return (
    <s.Container subheading={subheading} as={subheading ? "h3" : "h2"}>
      {kicker && <s.Kicker>{kicker}</s.Kicker>}
      {title}
    </s.Container>
  )
}
