import { Typography } from '@mui/material';
import * as React from 'react';


export default function BoxComponent() {
  return (
    <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
    </Typography>
  );
}