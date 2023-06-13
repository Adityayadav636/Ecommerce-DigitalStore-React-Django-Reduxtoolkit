import { Grid, Container } from "@mui/material";

function FormContainer({ children }) {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormContainer;
