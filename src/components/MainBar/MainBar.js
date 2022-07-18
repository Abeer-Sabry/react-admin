import React from "react";
// --- Components
import Search from "../Search/Search";
import AdminTable from "../Table/AdminTable";
// ---MUI-Components
import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/constants";

const MainBar = () => {
  return (
    <>
      <Search />
      <Box
        sx={{
          width: "100%",
          backgroundColor: `${colors.lightGrey}`,
          paddingX: "40px",
          paddingTop: "70px",
          height: "calc(100vh - 3px)",
        }}
      >
        <Stack direction="row" justifyContent="space-between" sx={{ marginBottom: "20px" }}>
          <Typography variant="h6">Requests</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Select
              // labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={""}
              label="Age"
              onChange={""}
              sx={{ width: "150px" }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={""}
              label="Age"
              onChange={""}
              width="122px"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Stack>
        </Stack>
        <AdminTable />
      </Box>
    </>
  );
};

export default MainBar;
