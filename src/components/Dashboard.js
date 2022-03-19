import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./listItems";
import Orders from "./Orders";
import Logo from "./Logo";
import { Avatar, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "./SearchBar";
import CategoryDropDown from "./CategoriesDropdown";
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#f4f3fa",
    },
  },
});

function DashboardContent() {
  const theme = useTheme();
  const belowSm = useMediaQuery(theme.breakpoints.down('sm'));
  const aboveMd =  useMediaQuery(theme.breakpoints.up('md'));
  // if screen size  is >= sm open drawer
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open } >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...( open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            > 
              
              
              {/* search and category */}
              
              <Box
                sx={{
                  display: "flex",
                  alignItems: "align-left",
                  flexDirection: "row",
                  backgroundColor: "#f7f8ff",
                }}
              >
                <CategoryDropDown />
                <SearchBar reverseIcon={true} />
                
              </Box>
            

               {/* avatar design */}
               
              <Box sx={{ display: "flex" }}>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: "5px" }}
                />
                <Avatar  alt="Remy Sharp" src="https://picsum.photos/200" />

                {aboveMd &&
                <>
                 <Box
                  sx={{
                    display: "flex",
                    alignItems: "align-left",
                    flexDirection: "column",
                    px: [1],
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "space-around",
                      flexDirection: "row",
                    }}
                  >
                    <Typography sx={{ size: "16px", fontWeight: "bold" }}>
                      Mario Speedwagon
                    </Typography>
                  </Box>
                  <Typography sx={{ size: "10px" }} variant="span">
                    Super Admin
                  </Typography>
                </Box>

                <IconButton color="inherit">
                  <ExpandMoreIcon />
                </IconButton>
                </>
                }
              </Box>
              
             
              

            </Box>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "space-around",
              flexDirection: "row",
              px: [1],
            }}
          >
            <Logo />
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
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
                  <Grid container item spacing={2}>
                    {/* search bar  */}
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box sx={{ backgroundColor: "#f7f8ff" }} >
                      <SearchBar reverseIcon={false} />
                    </Box>
                    </Grid>
                     
                     {/* add new */}
                     <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box>
                      <Button
                        sx={{ backgroundColor: "#3f50b5", color: "white" }}
                        variant="contained"
                        endIcon={<AddIcon />}
                      >
                        Add New
                      </Button>
                    </Box>
                    </Grid>
                  </Grid>

                </Box>
              </Grid>

              {/* table */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
