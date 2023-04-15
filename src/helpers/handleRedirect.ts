import { navigate } from "gatsby"

const handleRedirect = (
  e:
    | React.MouseEvent<HTMLAnchorElement, MouseEvent>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  to: string
) => {
  e.preventDefault()
  navigate(to)
}

export default handleRedirect
