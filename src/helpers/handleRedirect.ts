import { navigate } from "gatsby-link"
import { MouseEvent } from "react"

const handleRedirect = (e: MouseEvent, to: string) => {
  e.preventDefault()
  navigate(to)
}

export default handleRedirect
