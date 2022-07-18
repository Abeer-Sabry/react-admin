import React, { useState } from "react";
// --- MUI-Components
import { Collapse, Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
// --- Styles
import { CustomMenuItem } from "./styles";
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
// --- Constants
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
        {/* Dashboard */}
        <CustomMenuItem sx={{ pl: "0", pb: "20px" }} component={NavLink} to="/">
          <ListItemIcon>
            <DashboardOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </CustomMenuItem>
        {/* Requests */}
        <CustomMenuItem
          sx={{ pl: "0", mb: "10px" }}
          component={NavLink}
          to="/requests"
          onClick={handleClick}
        >
          <ListItemIcon>
            <ViewAgendaOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Requests</ListItemText>
        </CustomMenuItem>

        {/* Collapse menu */}
        <Collapse in={open} timeout="auto" unmountOnExit sx={{ mb: "10px" }}>
          <MenuItem component={NavLink} to="/pending">
            <ListItemIcon sx={{ color: colors.yellow }}>
              <PanoramaFishEyeOutlinedIcon sx={{ fontSize: "14px" }} />
            </ListItemIcon>
            <ListItemText>Pending</ListItemText>
          </MenuItem>
          <MenuItem component={NavLink} to="/confirmed">
            <ListItemIcon sx={{ color: colors.green }}>
              <PanoramaFishEyeOutlinedIcon sx={{ fontSize: "14px" }} />
            </ListItemIcon>
            <ListItemText>Confirmed</ListItemText>
          </MenuItem>
          <CustomMenuItem component={NavLink} to="/requests">
            <ListItemText sx={{ ml: "35px" }}>All Requests</ListItemText>
          </CustomMenuItem>
        </Collapse>
        {/* users */}
        <CustomMenuItem sx={{ pl: "0", pb: "20px" }} component={NavLink} to="/users">
          <ListItemIcon>
            <PersonOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Users</ListItemText>
        </CustomMenuItem>
        {/* Boxes */}
        <CustomMenuItem sx={{ pl: "0", pb: "20px" }} component={NavLink} to="/boxes">
          <ListItemIcon>
            <Inventory2Icon />
          </ListItemIcon>
          <ListItemText>Boxes</ListItemText>
        </CustomMenuItem>
        {/* Orders */}
        <CustomMenuItem sx={{ pl: "0", pb: "20px" }} component={NavLink} to="/orders">
          <ListItemIcon>
            <ChatBubbleOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Orders</ListItemText>
        </CustomMenuItem>

        <Divider />
        {/* Settings */}
        <CustomMenuItem sx={{ pl: "0", pt: "20px" }} component={NavLink} to="/settings">
          <ListItemIcon>
            <MoreHorizOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </CustomMenuItem>
      </MenuList>

      {/* LogOut Button */}
      <MenuItem sx={{ pl: "0", pt: "20px", position: "absolute", bottom: "12px", left: "30px" }}>
        <ListItemIcon>
          <PowerSettingsNewIcon />
        </ListItemIcon>
        <ListItemText>LogOut</ListItemText>
      </MenuItem>
    </>
  );
};

export default AdminMenu;
