import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import OrdersList from '../apiData/OrdersList'
import { Button } from "@mui/material";
import SearchBar from '../../components/SearchBar'
import AddIcon from '@mui/icons-material/Add';


const buttonStyle = {
  m:1 ,
  textTransform:'capitalize',
}

const btnStyle = {
  m:1,
  textTransform:'capitalize',
  backgroundColor:'#f4f3fa',
  color:'black'
}

export default function UserOrders() {
  return (
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3} item xs={12}>
              {/* search and add new */}

              <Grid item xs={12} container>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                    {/* search bar  */}
                    <Box sx={{ backgroundColor: "#f7f8ff" }} >
                      <SearchBar reverseIcon={false} />
                    </Box>
                   
                     
                     {/* add new */}
                     
                    <Box>
                      <Button
                        sx={{ backgroundColor: "#3f50b5", color: "white" }}
                        variant="contained"
                        endIcon={<AddIcon />}
                      >
                        Add New
                      </Button>
                    </Box>

                   
                  

                </Box>
              </Grid>

              {/* table */}
              <Grid item xs={12} >
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Box sx={{display:'flex', flexDirection:'row' , justifyContent:'start'}}>
                     <Button sx={buttonStyle}  variant="contained" >active (56)</Button>
                     <Button sx={btnStyle} >cancelled (12)</Button>
                     <Button sx={btnStyle} >completed (1000)</Button>
                  </Box>
                  <OrdersList />
                </Paper>
              </Grid>


            </Grid>
            
          </Container>
  );
}


