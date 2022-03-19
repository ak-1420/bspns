import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Alert, Box, Button, Grid } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

// Generate orders data
function createOrder(
  id,
  orderId,
  productName,
  productId,
  userName,
  userId,
  status,
  paymentMode,
  actions
) {
  return {
    id,
    orderId,
    productName,
    productId,
    userName,
    userId,
    status,
    paymentMode,
    actions
  };
}

const orders = [
  createOrder(0 , 1234567890 , 1234567890 , '11/03/2022' , '12' , 12345890 , 'Transist' , 'Credit card' , 'Initial Refund'),
  createOrder(1 , 1234567890 , 1234567890 , '11/03/2022' , '1234' , 12345890 , 'Failed' , 'Net Banking' , 'Initial Refund'),
  createOrder(2 , 1234567890 , 1234567890 , '11/03/2022' , '00' , 12345890 , 'Delivered' , 'Credit card' , 'Initial Refund'),
  createOrder(3 , 1234567890 , 1234567890 , '11/03/2022' , '12' , 12345890 , 'Closed' , 'Credit card' , 'Initial Refund'),
  createOrder(4 , 1234567890 , 1234567890 , '11/03/2022' , '12' , 12345890 , 'Active' , 'Credit card' , 'Initial Refund'),
  createOrder(5 , 1234567890 , 1234567890 , '11/03/2022' , '12' , 12345890 , 'Pending' , 'Credit card' , 'Initial Refund'),
];

const cellStyle = {
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
}

export default function OrdersList() {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                  <Box sx={cellStyle}>
                      <Box>Order Id</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                 <Box sx={cellStyle}>
                      <Box>Product Name</Box>
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
                      <Box>User Name</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                 <Box sx={cellStyle}>
                      <Box>user ID</Box>
                      <Box> <ArrowDropDown /> </Box>
                  </Box>
              </TableCell>
              <TableCell>
                 Status
              </TableCell>
              <TableCell>
                 Payment Mode
              </TableCell>
              <TableCell>
                 Actions
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell>{row.orderId}</TableCell>
                <TableCell>{row.productName}</TableCell>
                <TableCell>{row.productId}</TableCell>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>
                  {
                    (row.status === 'Transist') && 
                    <Alert icon={false} severity="success" color="success" >
                      {row.status}
                   </Alert>
                  }

                  {
                    (row.status === 'Failed') && 
                    <Alert icon={false} severity="error" color="error" >
                      {row.status}
                   </Alert>
                  }
                   {
                    (row.status === 'Delivered') && 
                    <Alert icon={false} severity="warning" color="warning" >
                      {row.status}
                   </Alert>
                  }
                  {
                    (row.status === 'Closed') && 
                    <Alert icon={false} severity="error" color="error" >
                      {row.status}
                   </Alert>
                  }
                  {
                    (row.status === 'Active') && 
                    <Alert icon={false} severity="success" color="success" >
                      {row.status}
                   </Alert>
                  }
                  {
                    (row.status === 'Pending') && 
                    <Alert icon={false} severity="warning" color="warning" >
                      {row.status}
                   </Alert>
                  }
                </TableCell>
                <TableCell>{row.paymentMode}</TableCell>
                <TableCell>
                <Button disabled ={(row.id === 3 || row.id === 2) } sx={{color:'#007aff' , textTransform:'capitalize'}} variant="outlined">{row.actions}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </React.Fragment>
  );
}
