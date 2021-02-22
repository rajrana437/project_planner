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
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '69ch',
    },
    maxWidth: 680,
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

function SignIn(props) {
  let history = useHistory();
  const { userRegisterd } = props;
  console.log(userRegisterd);
  const classes = useStyles();

  const [users, setUsers] = useState({
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

  function handleSubmit(event) {
    console.log(users.email);
    console.log(users.password);
    console.log('tesla', userRegisterd);
    event.preventDefault();
    var email = users.email;
    var password = users.password;
    var valid = false;
    var invalid = true;

    var emailArray = userRegisterd.map(({ email }) => email);

    console.log('all emails', emailArray);
    var passwordArray = userRegisterd.map(({ password }) => password);
    console.log('all passwords', passwordArray);

    for (var i = 0; i < emailArray.length; i++) {
      if (email == emailArray[i] && password == passwordArray[i]) {
        valid = true;
      }
    }
    if (valid) {
      alert('Succesfully Updated');
      history.push('/create');
    } else {
      alert('Incorrect email or password');
      return false;
    }
  }

  return (
    <Grid className={classes.gridContainer} container spacing={4}>
      <Grid item xs={12}>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography variant='h5' component='h2'>
              Sign In
            </Typography>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                required
                variant='outlined'
                onChange={handleChange}
                name='email'
                value={users.email}
                id='standard-basic'
                label='Email'
              />
              <TextField
                required
                variant='outlined'
                onChange={handleChange}
                name='password'
                value={users.password}
                id='standard-password-input'
                label='Password'
                type='password'
                autoComplete='current-password'
              />
            </form>
          </CardContent>
          <CardActions>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleSubmit}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  const users = state.user.usersList;
  console.log('registered', users);
  return {
    userRegisterd: users,
  };
};

export default connect(mapStateToProps)(SignIn);
