export { wrapPageElement } from "./wrapPageElement"

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
}
