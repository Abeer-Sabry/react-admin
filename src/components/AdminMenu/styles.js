import { styled } from "@mui/material/styles";
// --- Constants
import { colors } from "../../constants/constants";
// MUI-Components
import { ListItemIcon, ListItemText } from "@mui/material";

// Responsible for styling menu icon
export const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  fontSize: "14px",
  color: `${colors.iconGrey}`,
  "&:active": { color: `${colors.yellow}` },
}));

export const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  color: `${colors.darkBlue}`,
  fontWeight: "600",
}));
