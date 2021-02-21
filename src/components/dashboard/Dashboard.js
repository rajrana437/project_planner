import React from 'react';
import ProjectList from '../projects/ProjectList';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    rowGap: '2000px',
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <ProjectList />
    </div>
  );
};

export default Dashboard;
