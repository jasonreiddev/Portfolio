import React from "react"
import {
  ButtonListStylesProps,
  ButtonListStyles as s,
} from "./ButtonList.styles"
import { Button, ButtonProps } from "../../components/Button/Button"
import { HomepageLink } from "../../../components/ui"

export interface ButtonListProps {
  buttons: ButtonProps[] | HomepageLink[]
  align?: ButtonListStylesProps["align"]
  id?: string
  // When on card w/ reversed background color
  reversed?: boolean
}

export const ButtonList = ({
  buttons = [],
  align = "center",
  id = "button-list",
  reversed,
}: ButtonListProps) => {
  return (
    <s.Container align={align} id={id}>
      {buttons &&
        buttons.map((button, i) => (
          <s.ButtonWrapper key={button.id ? button.id : i}>
            <Button
              {...button}
              reversed={reversed}
              primary={i == 0}
              idPrefix={id}
              id={button.id ? button.id : i}
            />
          </s.ButtonWrapper>
        ))}
    </s.Container>
  )
}
