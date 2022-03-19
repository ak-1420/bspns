import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import DropDown from "./DropDown";
import SearchBar from "../../components/SearchBar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {  Outlet } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import SettingsIcon from '@mui/icons-material/Settings';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Logo from '../../components/Logo'
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const drawerWidth = 240;

const whiteColor = '#ffffff'
const blackColor = '#000000'
const bgSearchBar = '#f7f8ff'

const navList = [
  {name:'dashboard', icon: <DashboardIcon/>},
  {name:'suppliers' , icon: <LayersIcon /> },
  {name:'products' , icon: <ListAltIcon />},
  {name:'orders' , icon: <ShoppingCartIcon />},
  {name:'settings' , icon : <SettingsIcon/>},
  {name:'users', icon : <PeopleIcon/>}
]

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <Toolbar  sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "space-around",
              flexDirection: "row",
              px: [1],
            }}>
        
         <Logo />
      </Toolbar>

      <Divider />
      <List component="nav">
           { navList.map((item) =>{
              return <NavItem key={item.name} name={item.name}  icon={item.icon}/>
            })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: whiteColor,
          color: blackColor,
        }}
      >
        <Toolbar>
              
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              <DropDown />
              {<SearchBar bg={bgSearchBar} reverseIcon={true} />}
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: "5px", color: blackColor }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "5px",
              }}
            >

              <Box>

                <Avatar
                  alt="Remy Sharp"
                  src="https://picsum.photos/200"
                  sx={{ mr: "2px" }}
                />

              </Box>
              {
                <Box sx={{ ml: "4px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: "bold" }}
                        gutterBottom
                        component="div"
                      >
                        Mario
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="caption"
                        gutterBottom
                        component="div"
                      >
                        admin
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              }
              <Box>
                
                 <ProfileMenu/>
                
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } , }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

          <Outlet/>

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default ResponsiveDrawer;
