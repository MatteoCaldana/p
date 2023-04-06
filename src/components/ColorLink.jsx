import TypographyLink from "./TypographyLink"

const ColorLink = (props) =>
  <TypographyLink component="span" color="secondary" {...props}>
    {props.children}
  </TypographyLink>

export default ColorLink;