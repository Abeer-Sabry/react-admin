import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import AdminMenu from "../AdminMenu/AdminMenu";

const SideBar = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px 30px",

          // boxShadow: "10px 0px 15px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>.xo</h2>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: "40px" }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 46, height: 46 }}
          />
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
    </>
  );
};

export default SideBar;
