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
import { ArrowDropDown } from "@mui/icons-material";

// Generate suppliers data
function createUser(
  id,
  userName,
  userId,
  emailId,
  mobileNumber,
  orderPlaced,
  actions
) {
  return {
    id,
    userName,
    userId,
    emailId,
    mobileNumber,
    orderPlaced,
    actions,
  };
}

const users = [
  createUser(0 , '1234567890' , '1234567890' , 'a@gmail.com' , '7660941707','1234567890' ,''),
  createUser(1 , '1234567890' , '1234567890' , 'a@gmail.com' , '7660941707','1234567890' ,''),
  createUser(2 , '1234567890' , '1234567890' , 'a@gmail.com' , '7660941707','1234567890' ,''),
  createUser(3 , '1234567890' , '1234567890' , 'a@gmail.com' , '7660941707','1234567890' ,''),
  createUser(4 , '1234567890' , '1234567890' , 'a@gmail.com' , '7660941707','1234567890' ,''),
  createUser(5 , '1234567890' , '1234567890' , 'a@gmail.com' , '7660941707','1234567890' ,''),
  createUser(6 , '1234567890' , '1234567890' , 'a@gmail.com' , '7660941707','1234567890' ,''),
  createUser(7 , '1234567890' , '1234567890' , 'a@gmail.com' , '7660941707','1234567890' ,''),
];


const cellStyle = {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
}

export default function UsersList() {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                  <Box sx={cellStyle}>
                      <Box>User Name</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                 <Box sx={cellStyle}>
                      <Box>User ID</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell> 
                Email ID 
              </TableCell>
              <TableCell>
                 <Box sx={cellStyle}>
                      <Box>Mobile Number</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
              <Box sx={cellStyle}>
                      <Box>Order Placed</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.emailId}</TableCell>
                <TableCell>{row.mobileNumber}</TableCell>
                <TableCell>{row.orderPlaced}</TableCell>
                <TableCell
                  sx={{ backgroundColor: row.id === 1 ? "#f4f3fa" : "" }}
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
