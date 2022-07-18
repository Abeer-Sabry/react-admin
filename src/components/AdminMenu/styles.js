import { styled } from "@mui/material/styles";
// --- Constants
import { colors } from "../../constants/constants";
// MUI-Components
import { MenuItem } from "@mui/material";

// Responsible for styling menu icon
export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "14px",
  color: colors.darkBlue,
  svg: {
    color: colors.iconGrey,
  },
  "&.active": { color: colors.blue },
  "&.active svg": { color: colors.blue },
}));
