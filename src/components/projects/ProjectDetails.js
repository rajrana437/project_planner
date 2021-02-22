import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '69ch',
    },

    maxWidth: 680,
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

function ProjectDetails(props) {
  const classes = useStyles();

  const { projects } = props;

  console.log(projects);
  return (
    <Grid className={classes.gridContainer} container spacing={4}>
      <Grid item xs={12}>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              Project
            </Typography>
            <Typography variant='h5' component='h2'>
              {projects.title}
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {projects.date} {projects.time}
            </Typography>
            <Typography variant='body2' component='p'>
              {projects.content}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id);
  const project = state.project.items;
  const selectedProject = project ? project[id] : null;
  console.log(selectedProject);
  return {
    projects: selectedProject,
  };
};

export default connect(mapStateToProps)(ProjectDetails);
