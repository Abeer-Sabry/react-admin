import React, { useState } from "react";
// --- MUI-Components
import { Collapse, Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
// --- Styles
import { CustomListItemIcon, CustomListItemText } from "./styles";
// --- React-Router-dom
import { NavLink } from "react-router-dom";
// --- MUI-Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PanoramaFishEyeOutlinedIcon from "@mui/icons-material/PanoramaFishEyeOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { colors } from "../../constants/constants";

const AdminMenu = () => {
  // Responsible for toggling Collapse list
  const [open, setOpen] = useState(true);

  // Responsible for toggling  open state
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <MenuList>
        <MenuItem sx={{ pl: "0", pb: "20px" }} component={NavLink} to="">
          <CustomListItemIcon>
            <DashboardOutlinedIcon />
          </CustomListItemIcon>
          <CustomListItemText>Dashboard</CustomListItemText>
        </MenuItem>
        <MenuItem sx={{ pl: "0", mb: "10px" }} component={NavLink} to="" onClick={handleClick}>
          <CustomListItemIcon>
            <ViewAgendaOutlinedIcon />
          </CustomListItemIcon>
          <CustomListItemText>Requests</CustomListItemText>
        </MenuItem>
        {/* Collapse menu */}
        <Collapse in={open} timeout="auto" unmountOnExit sx={{ mb: "10px" }}>
          <MenuItem component={NavLink} to="">
            <ListItemIcon sx={{ color: `${colors.yellow}` }}>
              <PanoramaFishEyeOutlinedIcon sx={{ fontSize: "13px" }} />
            </ListItemIcon>
            <CustomListItemText>Pending</CustomListItemText>
          </MenuItem>

          <MenuItem component={NavLink} to="">
            <ListItemIcon sx={{ color: `${colors.green}` }}>
              <PanoramaFishEyeOutlinedIcon sx={{ fontSize: "13px" }} />
            </ListItemIcon>
            <CustomListItemText>Confirmed</CustomListItemText>
          </MenuItem>
          <MenuItem component={NavLink} to="">
            {/* <ListItemIcon></ListItemIcon> */}
            <CustomListItemText sx={{ ml: "35px" }}>All Requests</CustomListItemText>
          </MenuItem>
        </Collapse>
        <MenuItem sx={{ pl: "0", pb: "20px" }} component={NavLink} to="">
          <CustomListItemIcon>
            <PersonOutlineOutlinedIcon />
          </CustomListItemIcon>
          <CustomListItemText>Users</CustomListItemText>
        </MenuItem>

        <MenuItem sx={{ pl: "0", pb: "20px" }} component={NavLink} to="">
          <CustomListItemIcon>
            <Inventory2Icon />
          </CustomListItemIcon>
          <CustomListItemText>Boxes</CustomListItemText>
        </MenuItem>
        <MenuItem sx={{ pl: "0", pb: "20px" }} component={NavLink} to="">
          <CustomListItemIcon>
            <ChatBubbleOutlineOutlinedIcon />
          </CustomListItemIcon>
          <CustomListItemText>Orders</CustomListItemText>
        </MenuItem>

        <Divider />
        <MenuItem sx={{ pl: "0", pt: "20px" }} component={NavLink} to="">
          <CustomListItemIcon>
            <MoreHorizOutlinedIcon />
          </CustomListItemIcon>
          <CustomListItemText>Settings</CustomListItemText>
        </MenuItem>
      </MenuList>

      {/* LogOut Button */}
      <MenuItem sx={{ pl: "0", pt: "20px" }}>
        <CustomListItemIcon>
          <PowerSettingsNewIcon />
        </CustomListItemIcon>
        <CustomListItemText>LogOut</CustomListItemText>
      </MenuItem>
    </>
  );
};

export default AdminMenu;
