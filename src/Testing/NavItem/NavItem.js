import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom"



export default function NavItem({name , icon }) {

    let navigate = useNavigate()
    
    const changeRoute = () => {
        let path = name
        navigate(path)
       
    }

  return (
    <ListItemButton onClick={changeRoute} sx={{backgroundColor: ( (`/${name}` === window.location.pathname) || (name === 'dashboard' && window.location.pathname === '/')) ? '#f4f3fa' : ''}}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
        <ListItemText primary={name} sx={{textTransform:'capitalize'}}/>
    </ListItemButton>
  );
}
