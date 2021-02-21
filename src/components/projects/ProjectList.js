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

// var time = new Date();
// var currentTime = time.toLocaleString('en-US', {
//   hour: 'numeric',
//   minute: 'numeric',
//   hour12: true,
// });
// console.log(currentTime);

const ProjectList = (props) => {
  const { projects, userRegisterd } = props;
  console.log(projects);
  const classes = useStyles();

  function deleteProject(id) {
    // projects((project) => {
    //   return project.filter((projectItem, index) => {
    //     return index !== id;
    //   });
    // });
    projects.filter((projectItem, index) => {
      return index !== projectItem.id;
    });
    console.log('deleteeee', projects[id]);
  }

  //   var firstNameArray = userRegisterd.map(({ firstName }) => firstName);
  //   const latestName = firstNameArray[firstNameArray.length - 1];

  //   console.log('registered user', userRegisterd);

  //   console.log('lastUser', latestName);
  return (
    <Fragment>
      <Grid className={classes.gridContainer} container spacing={4}>
        <Grid item xs={12}>
          {/* {projects.map(createCard)} */}
          {projects.map((projectItem, index) => {
            return (
              <ProjectSummary
                key={index}
                id={index}
                title={projectItem.title}
                content={projectItem.content}
                date={projectItem.date}
                time={projectItem.time}
                onDelete={deleteProject}
                // firstName={latestName}
              />
            );
          })}
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const project = state.project.items;
  const users = state.user.usersList;
  console.log(project);
  return {
    projects: project,
    userRegisterd: users,
  };
};

export default connect(mapStateToProps)(ProjectList);
