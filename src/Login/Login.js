import { LockOutlined } from '@mui/icons-material'
import { Avatar, Button, Grid ,Link, Paper, TextField, Typography} from '@mui/material'
import React from 'react'

// styles
const paperStyle={
    padding:20,
    height:'70vh',
    width:300,
    margin:'20px auto'
}
const avatarStyle = {
    backgroundColor: '#1976d2'
}

export default function Login() {

    return (
      <Grid align='center' container>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center" item xs={12}>
            <Avatar style={avatarStyle}>
              <LockOutlined />
            </Avatar>
            <h2>Sign In </h2>
          </Grid>
          <Grid container spacing={3} align='center' item xs={12}>
            
            {/* email */}
            <Grid item xs={12}>
              <TextField
                id="textEmail"
                label="Email"
                placeholder="Enter email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            {/* password */}
            <Grid item xs={12}>
              <TextField
                id="textPassword"
                label="Password"
                placeholder="Enter password"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            {/* sign in button */}
            <Grid item xs={12}>
                <Button size='medium' variant='contained' color='primary'>
                    Sign in
                </Button>
            </Grid>

            {/* forgot password */}
            <Grid item xs={12}>
                <Typography variant='body1'>
                    <Link href="/forgot-password" underline='none'>
                     Forgot password
                    </Link>
                </Typography>
            </Grid>

          </Grid>
        </Paper>
      </Grid>
    );
}
