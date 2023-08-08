import Grid from '@mui/material/Grid';

const Layout = (props) => (
  <Grid container justifyContent="center" {...props}>
    <Grid item xs={11}>
      {props.children}
    </Grid>
  </Grid>
)

export default Layout;