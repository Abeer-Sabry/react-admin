import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminsData } from "../../Redux/adminSlice";

import { TableHead, TableRow, TableCell, TableSortLabel, Box, colors } from "@mui/material";

const UserTable = () => {
  const { admins } = useSelector(state => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdminsData());
  }, [dispatch]);

  return (
    <Box sx={{ backgroundColor: `${colors.blueGrey}` }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel>name</TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
    </Box>
  );
};

export default UserTable;
