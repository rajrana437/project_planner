import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    // marginLeft: 30,
    // marginTop: 70,
    // marginBottom: 20,
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
});

function ProjectSummary(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { projects } = props;
  console.log(projects);

  return (
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
          16/02/2021
        </Typography>
        <Typography variant='body2' component='p'>
          {projects.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Edit</Button>
        <Button size='small'>Delete</Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => {
  const project = state.project.projects;
  console.log(state);
  return {
    projects: project,
  };
};

export default connect(mapStateToProps)(ProjectSummary);
