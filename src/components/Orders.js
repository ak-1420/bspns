import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Badge from "@mui/material/Badge";
import { Grid, IconButton, Typography } from "@mui/material";

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

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Supplier Name</TableCell>
              <TableCell>Supplier ID</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>No.Of Products</TableCell>
              <TableCell>Tax Number (GST)</TableCell>
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
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
