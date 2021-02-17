import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Avatar, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {
    marginBottom: 50,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root} position='static'>
        <Toolbar>
          <Grid
            justify='space-between' // Add it here :)
            container
            spacing={24}
          >
            <Grid item>
              <NavLink
                to='/'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Typography type='title' color='inherit' variant='h4'>
                  Project Planner
                </Typography>
              </NavLink>
            </Grid>

            <Grid item>
              <div>
                <NavLink to='/create' style={{ textDecoration: 'none' }}>
                  <Button raised color='accent'>
                    New Project
                  </Button>
                </NavLink>
                <NavLink to='/signup' style={{ textDecoration: 'none' }}>
                  <Button raised color='accent'>
                    Sign Up
                  </Button>
                </NavLink>
                <NavLink to='/signin' style={{ textDecoration: 'none' }}>
                  <Button raised color='accent'>
                    Login
                  </Button>
                </NavLink>
                <Button raised color='accent'>
                  <Avatar className={classes.purple}>RR</Avatar>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
