import { Badge, Stack } from "@mui/material";
import React from "react";
import { CustomInput } from "./styles";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { colors } from "../../constants/constants";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Stack
      direction="row"
      sx={{ gap: "122px", padding: "5px 40px", backgroundColor: "white" }}
      alignItems="center"
      position="relative"
    >
      <SearchIcon
        sx={{
          position: "absolute",
          top: "50%",
          left: "17px",
          transform: "translate(100%, -50%)",
          color: `${colors.tableGrey}`,
          fontSize: "20px",
        }}
      />
      <CustomInput placeholder="search a contact" />
      <Badge badgeContent={1} color="warning">
        <NotificationsNoneIcon sx={{ fontSize: "23px", color: `${colors.tableGrey}` }} />
      </Badge>
    </Stack>
  );
};

export default Search;
