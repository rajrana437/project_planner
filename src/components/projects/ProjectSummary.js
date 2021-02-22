import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { deleteProject } from '../../actions/projectActions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    marginBottom: 20,
    paddingLeft: 20,
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

  function handleDelete(event) {
    props.deleteProject(props.id);
  }

  console.log(props.id);
  return (
    <Grid className={classes.root} xs={12} container spacing={2}>
      <Card className={classes.root} variant='outlined'>
        <Link
          to={'/project/' + props.id}
          key={props.id}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              Project
            </Typography>
            <Typography variant='h5' component='h2'>
              {props.title}
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {props.date} {props.time}
            </Typography>
            <Typography variant='body2' component='p'>
              {props.content.substring(0, 45)}
              <span
                style={{
                  textDecoration: 'strong',
                  color: 'blue',
                  fontWeight: 'strong',
                }}
              >
                {' '}
                ...read more
              </span>
            </Typography>
          </CardContent>
        </Link>
        <CardActions>
          <Button onClick={handleDelete} size='small'>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id)),
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);
