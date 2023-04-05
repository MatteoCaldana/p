import IconButton from '@mui/material/IconButton';

const ContainedIconButton = (props) =>
  <IconButton style={{ background: props.iconcolor + "33" }} {...props}>
    <props.icon style={{ fill: props.iconcolor }}/>
  </IconButton>

export default ContainedIconButton;