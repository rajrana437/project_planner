import React from 'react';
import ProjectList from '../projects/ProjectList';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.gridContainer} container spacing={4}>
        <Grid item xs={12}>
          <ProjectList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
