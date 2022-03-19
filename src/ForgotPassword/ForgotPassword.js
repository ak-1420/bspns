import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Avatar, Button, Grid ,Link , Paper, TextField, Typography } from '@mui/material'
import React from 'react'


// styles
const paperStyle={
    padding:20,
    height:'50vh',
    width:300,
    margin:'20px auto'
}
const avatarStyle = {
    backgroundColor: '#1976d2'
}

export default function ForgotPassword() {

    return (
      <Grid align='center' container>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center" item xs={12}>
            <Avatar style={avatarStyle}>
              <LockOpenIcon />
            </Avatar>
            <h2> Recover Password </h2>
          </Grid>
          <Grid container spacing={3} align='center' item xs={12}>
            
            {/* email */}
            <Grid item xs={12}>
              <TextField
                id="textEmail"
                label="Email"
                placeholder="Enter registered email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            {/* sign in button */}
            <Grid item xs={12}>
                <Button size='medium' variant='contained' color='primary'>
                    Send Recover email
                </Button>
            </Grid>

            {/* back to login */}
            <Grid item xs={12}>
                <Typography variant='body1'>
                    <Link href="/login" underline='none'>
                     Back to Login
                    </Link>
                </Typography>
            </Grid>

          </Grid>
        </Paper>
      </Grid>
    );
}
