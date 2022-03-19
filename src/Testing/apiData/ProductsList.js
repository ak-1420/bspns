import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Alert, Avatar, Box, Grid, IconButton } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";


// Generate Products Data
function createData(id, image, productName, supplierName, productId, category ,availableQuantity , totalQuantity) {
  return { id, image , productName, supplierName, productId, category , availableQuantity , totalQuantity };
}

const rows = [
  createData(
    0,
    "https://picsum.photos/200",
    "Road lining measuring equiment",
    "1234 supplier",
     12345678,
   "Hardware suppliers",
   11,
   20
  ),
  createData(
    1,
    "https://picsum.photos/200",
    "product 2",
    "1234 supplier",
     12345678,
   "Hardware suppliers",
   0,
   20
  ),
  createData(
    2,
    "https://picsum.photos/200",
    "product 3",
    "1234 supplier",
     12345678,
   "Hardware suppliers",
   2,
   20
  ),
  createData(
    3,
    "https://picsum.photos/200",
    "product 4",
    "1234 supplier",
     12345678,
   "Hardware suppliers",
   1,
   20
  ),
  
];
// closed 0 , pending 1 , active 2

const actionIconStyle = {
  height:20,
  weight:20
}

const cellStyle = {
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
}

const actionStyle = {
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
}

export default function ProductsList() {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>
                  <Box sx={cellStyle}>
                      <Box>product Name</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                  <Box sx={cellStyle}>
                      <Box>Supplier Name</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                  <Box sx={cellStyle}>
                      <Box>Product ID</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                  <Box sx={cellStyle}>
                      <Box>Category</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                  <Box sx={cellStyle}>
                      <Box>Available Quantity</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                
                <Box sx={cellStyle}>
                      <Box>Total Quantity</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ backgroundColor: row.id === 1 ? "#f4f3fa" : "" }}
              >
                <TableCell>
                <Avatar src={row.image} variant='square' />
                </TableCell>
                <TableCell>{row.productName}</TableCell>
                <TableCell>{row.supplierName}</TableCell>
                <TableCell>{row.productId}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>
                  {(row.availableQuantity > 2) && <span>{row.availableQuantity}</span>}

                  {row.availableQuantity === 0 && (
                      <Alert icon={false} severity="error" color="error" >
                         Closed
                     </Alert>
                  )}
                  {row.availableQuantity === 1 && (
                      <Alert icon={false} severity="warning" color="warning" >
                         Pending
                     </Alert>
                  )}
                  {row.availableQuantity === 2 && (
                      <Alert icon={false} severity="success" color="success" >
                         Active
                     </Alert>
                  )}
                  </TableCell>
                <TableCell>
                  {row.totalQuantity}
                </TableCell>
                <TableCell >
                      <Box sx={actionStyle}>
                      <Box>
                      <IconButton
                        size="small"
                        sx={{ backgroundColor: "#f4f3fa", margin: "2px" }}
                      >
                        <EditIcon sx={actionIconStyle} fontSize="small" />
                      </IconButton>
                      </Box>
                    
                      <Box>
                      <IconButton
                        size="small"
                        sx={{ backgroundColor: "#f4f3fa", margin: "2px" }}
                      >
                        <DeleteIcon sx={actionIconStyle} fontSize="small" />
                      </IconButton>
                      </Box>
                      
                      <Box>
                      <IconButton
                        size="small"
                        sx={{ backgroundColor: "#f4f3fa", margin: "2px" }}
                      >
                        <PlayArrowIcon sx={actionIconStyle} fontSize="small" />
                      </IconButton>
                      </Box>

                    </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </React.Fragment>
  );
}
