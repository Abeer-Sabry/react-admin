import { styled } from "@mui/material/styles";
import { colors } from "../../constants/constants";

export const CustomInput = styled("input")(({ theme }) => ({
  width: "100%",
  border: "none",
  backgroundColor: "white",
  padding: "20px 0",
  paddingLeft: "20px",
  fontSize: "15px",
  color: `${colors.tableGrey}`,
  "&:focus-visible ": { outline: "noe" },
}));
