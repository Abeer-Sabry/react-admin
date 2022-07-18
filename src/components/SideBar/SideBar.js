import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import AdminMenu from "../AdminMenu/AdminMenu";
import { colors } from "../../constants/constants";
const SideBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px 30px",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "9990",
        height: "100vh",
        boxShadow: "5px -4px 8px rgba(0,0,0,0.03)",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: colors.blue }}>.xo</h2>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: "40px" }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 46, height: 46 }} />
        <div>
          <Typography sx={{ fontSize: "17px" }} variant="h6">
            Ahmed Reda
          </Typography>
          <Typography sx={{ color: "grey", fontSize: "15px" }} variant="p">
            #125664
          </Typography>
        </div>
      </Stack>

      <AdminMenu />
    </Box>
  );
};

export default SideBar;
