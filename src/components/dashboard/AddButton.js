import React from 'react';
import { Grid } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { yellow } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    margin: 0,
    top: 'auto',
    right: 50,
    bottom: 40,
    left: 'auto',
    position: 'fixed',
    color: yellow[500],
    fontSize: 85,
  },
});

function AddButton() {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify='flex-end' alignItems='flex-end'>
        <IconButton style={{ top: 420, right: 80 }}>
          <Link to='/create'>
            <AddCircleOutlineIcon className={classes.button} />
          </Link>
        </IconButton>
      </Grid>
    </div>
  );
}

export default AddButton;
