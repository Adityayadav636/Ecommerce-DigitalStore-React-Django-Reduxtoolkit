import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

const StyledAlert = styled(MuiAlert)(({ theme, variant }) => ({
  backgroundColor: "grey",
  color:"white"
}));

export default function Message({ variant, children }) {
  return (
    <StyledAlert variant={variant}  severity={variant}>
      {children}
    </StyledAlert>
  );
}
