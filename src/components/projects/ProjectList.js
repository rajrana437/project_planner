import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});

const ProjectList = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer} container spacing={4}>
      <Grid item xs={12}>
        <ProjectSummary />
      </Grid>
    </Grid>
  );
};

export default ProjectList;
