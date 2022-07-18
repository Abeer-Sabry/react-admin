import React, { useState } from "react";
// --- Components
import Search from "../Search/Search";
import AdminTable from "../Table/AdminTable";
// ---MUI-Components
import { Box, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
// --- Constants-Colors
import { colors } from "../../constants/constants";

const MainBar = () => {
  const [sort, setSort] = useState("total A-Z");
  const [filter, setFilter] = useState("total:$2000-3000");

  const handleSortChange = event => {
    setSort(event.target.value);
  };
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

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
        <Stack direction="row" justifyContent="space-between" sx={{ marginBottom: "25px" }}>
          <Typography variant="h6">Requests</Typography>
          {/* SortSelect */}
          <Stack direction="row" justifyContent="space-between">
            <FormControl sx={{ width: "200px", flexDirection: "row", alignItems: "center" }}>
              <label htmlFor="customSelect" style={{ color: colors.tableGrey, fontSize: "14px" }}>
                Sortby:
              </label>
              <Select id="customSelect" value={sort} onChange={handleSortChange}>
                <MenuItem value={"total A-Z"}>total A-Z</MenuItem>
                <MenuItem value={"Ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </FormControl>
            {/* FilterSelect */}
            <FormControl sx={{ width: "200px", flexDirection: "row", alignItems: "center" }}>
              <label htmlFor="customSelect" style={{ color: colors.tableGrey, fontSize: "14px" }}>
                Filter:
              </label>
              <Select id="customSelect" value={filter} onChange={handleFilterChange}>
                <MenuItem value={"total:$2000-3000"}>total:$2000-3000</MenuItem>
                <MenuItem value={"Ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <AdminTable />
      </Box>
    </>
  );
};

export default MainBar;
