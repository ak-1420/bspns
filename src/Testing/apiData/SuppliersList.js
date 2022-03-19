import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Grid, IconButton } from "@mui/material";
import { ArrowDropDown ,CalendarToday} from "@mui/icons-material";

// Generate suppliers data
function createSupplier(
  id,
  name,
  supplierId,
  startDate,
  noOfProducts,
  taxNumber,
  actions
) {
  return {
    id,
    name,
    supplierId,
    startDate,
    noOfProducts,
    taxNumber,
    actions,
  };
}

const suppliers = [
  createSupplier(0, "abcd", 1234567, "11/03/2022", 12, 122345678, ""),
  createSupplier(
    1,
    "1234 supplier pvt limited",
    1234567,
    "11/03/2022",
    12,
    122345678,
    ""
  ),
  createSupplier(2, "test supplier", 1234567, "11/03/2022", 12, 122345678, ""),
  createSupplier(3, "supplier name", 1234567, "11/03/2022", 12, 122345678, ""),
  createSupplier(4, "supplier name", 1234567, "11/03/2022", 12, 122345678, ""),
  createSupplier(5, "supplier name", 1234567, "11/03/2022", 12, 122345678, ""),
  createSupplier(6, "supplier name", 1234567, "11/03/2022", 12, 122345678, ""),
  createSupplier(7, "supplier name", 1234567, "11/03/2022", 12, 122345678, ""),
];


const cellStyle = {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
}

export default function SuppliersList() {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                  <Box sx={cellStyle}>
                      <Box>Supplier Name</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                 <Box sx={cellStyle}>
                      <Box>Supplier ID</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>  
                 <Box sx={cellStyle}>
                      <Box>Start Date</Box>
                      <Box> <CalendarToday sx={{height:15 , width:15}}/> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                 <Box sx={cellStyle}>
                      <Box>No.Of Products</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
              <Box sx={cellStyle}>
                      <Box>Tax Number (GST)</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliers.map((row) => (
              <TableRow
                key={row.id}
                sx={{ backgroundColor: row.id === 2 ? "#f4f3fa" : "" }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.supplierId}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.noOfProducts}</TableCell>
                <TableCell>{row.taxNumber}</TableCell>
                <TableCell
                  sx={{ backgroundColor: row.id === 2 ? "white" : "" }}
                >
                  
                      <IconButton
                        size="small"
                        sx={{ backgroundColor: "#f4f3fa", margin: "2px" }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    
                      <IconButton
                        size="small"
                        sx={{ backgroundColor: "#f4f3fa", margin: "2px" }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                   
                      <IconButton
                        size="small"
                        sx={{ backgroundColor: "#f4f3fa", margin: "2px" }}
                      >
                        <PlayArrowIcon fontSize="small" />
                      </IconButton>
                    
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </React.Fragment>
  );
}
