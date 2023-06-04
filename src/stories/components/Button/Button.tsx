// import { navigate } from "gatsby"
import { ButtonStyles as s, ButtonStylesProps } from "./Button.styles"
import handleRedirect from "../../../helpers/handleRedirect"

export interface ButtonProps extends ButtonStylesProps {
  text: string
  onClick?: () => void
  href?: string
  target?: string
  idPrefix: string
  id: string
}

const externalLink = new RegExp("^(https?://|mailto:)", "i")

export const Button = ({
  text,
  onClick,
  href,
  target,
  idPrefix,
  id,
  primary = false,
  size = "medium",
  card,
}: ButtonProps) => {
  const ElementType = href ? "a" : "button"

  return (
    <s.MotionWrapper
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={primary && { scale: 1.05 }}
      whileTap={primary ? { scale: 1.025 } : { scale: 0.975 }}
    >
      <s.Button
        primary={primary}
        size={size}
        card={card}
        id={`${idPrefix}-${id}`}
        as={ElementType}
        onClick={href == "test-test" ? (e) => handleRedirect(e, href) : null}
        {...{
          href: ElementType == "a" ? href : undefined,
          target: ElementType == "a" ? target : undefined,
        }}
      >
        {text}
      </s.Button>
    </s.MotionWrapper>
  )
}
