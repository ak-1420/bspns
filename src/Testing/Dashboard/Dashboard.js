import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import DatePicker from "../../components/DatePicker/DatePicker";
import ApexCharts from 'apexcharts'




const suppliersStyle = {
  backgroundImage: `linear-gradient(89deg, #f39034 2%, #ff2727 100%)`,
  p: 2,
  height: 137,
  borderRadius: 2,
  flexGrow: 0,
};
const productsStyle = {
  backgroundImage: `linear-gradient(to left, #003ad2 100%, #0097ec 0%)`,
  p: 2,
  height: 137,
  borderRadius: 2,
  flexGrow: 0,
};
const productsSoldStyle = {
  backgroundImage: `linear-gradient(271deg, #00a843 100%, #1fd071 0%)`,
  p: 2,
  height: 137,
  borderRadius: 2,
  flexGrow: 0,
};

var salesOrderSummaryOptions = {
  series: [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
  name: 'Revenue',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
  name: 'Free Cash Flow',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['01-07', '08-15', '16-23', '23-30'],
},
yaxis: {
  title: {
    text: ''
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};



var totalSalesSummaryOptions = {
  chart: {
    height: 280,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ]
  }
  
};



export default function Dashboard() {
  React.useEffect(() => {

    var salesOrderChart = new ApexCharts(document.querySelector("#sales-order-summary"), salesOrderSummaryOptions);
    salesOrderChart.render();

    var totalSalesSummartyChart = new ApexCharts(document.querySelector("#total-sales-summary"), totalSalesSummaryOptions);
    totalSalesSummartyChart.render();


  })

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

      <Grid container spacing={3} item xs={12}>


        <Grid item xs={12} sm={4}>
          <Paper elevation={10} sx={suppliersStyle}>
            <Box sx={{ display: "flex", flexDirection: "column"  , justifyContent:'space-between' }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                 <Typography variant='subtitle1' sx={{color:'white', textTransform:'capitalize'}}>
                  suppliers
                </Typography>
                </Box>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zm-2 3V4H4v15a1 1 0 0 0 1 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z" fill="rgba(255,255,255,1)"/></svg>
                </Box>
              </Box>
              <Box sx={{mt:'1.5rem'}}>
                <Typography variant='h4' sx={{color:'white' , fontWeight:'bold'}}>
                  56
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper elevation={10} sx={productsStyle}>
          <Box sx={{ display: "flex", flexDirection: "column"  , justifyContent:'space-between' }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                 <Typography variant='subtitle1' sx={{color:'white' , textTransform:'capitalize'}}>
                  all products
                </Typography>
                </Box>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03 3.298 19.18A.5.5 0 0 1 3 18.72V4H1V2h22v2h-2zM5 4v13.745l7 3.1 7-3.1V4H5zm3 4h8v2H8V8zm0 4h8v2H8v-2z" fill="rgba(255,255,255,1)"/></svg>
                </Box>
              </Box>
              <Box sx={{mt:'1.5rem'}}>
                <Typography variant='h4' sx={{color:'white' , fontWeight:'bold'}}>
                  24000
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper elevation={10} sx={productsSoldStyle}>
          <Box sx={{ display: "flex", flexDirection: "column"  , justifyContent:'space-between' }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                 <Typography variant='subtitle1' sx={{color:'white', textTransform:'capitalize'}}>
                  products sold
                </Typography>
                </Box>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(255,255,255,1)"/></svg>
                </Box>
              </Box>
              <Box sx={{mt:'1.5rem'}}>
                <Typography variant='h4' sx={{color:'white' , fontWeight:'bold'}}>
                  12,160
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

      </Grid>

      


      <Grid item xs={12} sx={{mt:'1.5rem' }}>
        <Paper elevation={3}>
           <Box sx={{display:'flex' , flexDirection:'column'}}>
              <Box sx={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' , p:'1rem'}}>
                   {/* display time and date here */}
                     <Box >
                        <Typography variant='subtitle1' sx={{fontWeight:'bold',}}>
                            Sales Orders  Summary
                       </Typography>
                     </Box> 
                   <Box>
                     <DatePicker/>
                   </Box>
              </Box>
              <Box>
                {/* display column chat here */}
                 <div id="sales-order-summary">
                </div>
              </Box>

            </Box>
        </Paper>

      </Grid>



      <Grid item xs={12} sx={{mt:'1.5rem' }}>
        <Paper elevation={3}>
           <Box sx={{display:'flex' , flexDirection:'column'}}>
              <Box sx={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' , p:'1rem'}}>
                   {/* display time and date here */}
                     <Box >
                        <Typography variant='subtitle1' sx={{fontWeight:'bold',}}>
                            Total Sales Summary
                       </Typography>
                     </Box> 
                   <Box>
                   <DatePicker/>
                   </Box>
              </Box>
              <Box >
                {/* display column chat here */}
                <div id="total-sales-summary" >

                </div>
              </Box>

            </Box>
        </Paper>

      </Grid>

    </Container>
  );
}


