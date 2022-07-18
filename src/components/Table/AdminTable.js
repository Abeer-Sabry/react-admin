import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// --- MUI-Styles
import { alpha } from "@mui/material/styles";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
  Checkbox,
  IconButton,
  Tooltip,
} from "@mui/material";
// ----MUI-Icon
import DeleteIcon from "@mui/icons-material/Delete";
// --- Constant-Colors
import { colors } from "../../constants/constants";
// --- Responsible For Table HeadComponent
import EnhancedTableHead from "./TableHead";
import { fetchAdminsData } from "../../Redux/adminSlice";
import { useSelector, useDispatch } from "react-redux";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];
// --- ToolBar
const EnhancedTableToolbar = props => {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: theme =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
        {numSelected} selected
      </Typography>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};
// --- ToolBar-ProtoTypes
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const AdminTable = () => {
  const { admins } = useSelector(state => state.admin);
  console.log("admin", admins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdminsData());
  }, [dispatch]);

  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = admins.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  return (
    <Box sx={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      {selected.length ? <EnhancedTableToolbar numSelected={selected.length} /> : null}

      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={admins.length}
          />
          <TableBody>
            {admins
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((admin, index) => {
                const isItemSelected = isSelected(admin.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={event => handleClick(event, admin.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={admin.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {admin.id}
                    </TableCell>
                    <TableCell align="right" sx={{ textTransform: "capitalize" }}>
                      {admin.name.firstname} {admin.name.lastname}{" "}
                    </TableCell>
                    <TableCell align="right">{admin.email}</TableCell>
                    <TableCell align="right">{admin.password}</TableCell>
                    <TableCell align="right">{admin.phone}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={admins.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};
export default AdminTable;
