import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

function Footer() {
  return (
    <footer>
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="body1" color="textSecondary" align="center">
              Copyright &copy; FooTshop
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
