import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '69ch',
    },
    // marginTop: 72,
    maxWidth: 720,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: 60,
  },
});

export default function SignUp(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [users, setUsers] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUsers((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }
  console.log(users);
  // function handleSubmit(event) {
  //   props.createProject(project);
  //   setUsers({
  //     title: '',
  //     content: '',
  //   });
  //   event.preventDefault();
  // }

  return (
    <Grid className={classes.gridContainer} container spacing={4}>
      <Grid item xs={12}>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography variant='h5' component='h2'>
              Sign Up
            </Typography>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                name='firstName'
                value={users.firstName}
                onChange={handleChange}
                id='standard-basic'
                label='First Name'
              />
              <TextField
                name='lastName'
                value={users.lastName}
                onChange={handleChange}
                id='standard-basic'
                label='Last Name'
              />
              <TextField
                name='email'
                value={users.email}
                onChange={handleChange}
                id='standard-basic'
                label='Email'
              />
              <TextField
                name='password'
                value={users.password}
                onChange={handleChange}
                id='standard-password-input'
                label='Password'
                type='password'
                autoComplete='current-password'
              />
            </form>
          </CardContent>
          <CardActions>
            <Button variant='contained' color='secondary'>
              Signup
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
