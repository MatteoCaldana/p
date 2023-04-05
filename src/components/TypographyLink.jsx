import { NavLink } from 'react-router-dom';

import { Link, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const TypographyUnderline = styled(Typography)(({ theme }) => ({
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const TypographyLink = (props) => (
  <TypographyUnderline {...props}>
    {
      props.to[0] === "/" ?
        <NavLink to={props.to} style={{ textDecoration: 'none', color: 'unset' }}>
          {props.children}
        </NavLink>
        :
        <Link href={props.to} style={{ textDecoration: 'none', color: 'unset' }}>
          {props.children ? props.children : props.to}
        </Link>
    }
  </TypographyUnderline>
);

export default TypographyLink;