import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});

function createCard(project) {
  return (
    <ProjectSummary
      title={project.title}
      content={project.content}
      date={project.date}
    />
  );
}

const ProjectList = (props) => {
  const { projects } = props;
  console.log(projects);
  const classes = useStyles();
  return (
    <Fragment>
      <Grid className={classes.gridContainer} container spacing={4}>
        <Grid item xs={12}>
          {projects.map(createCard)}
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const project = state.project.items;
  console.log(project);
  return {
    projects: project,
  };
};

export default connect(mapStateToProps)(ProjectList);
