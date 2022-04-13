import MuiTypography from "@mui/material/Typography";

export default function Typography(props) {
  const { children } = props;
  return (
    <MuiTypography color="textPrimary" {...props}>
      {children}
    </MuiTypography>
  );
}
