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
import { createProject } from '../../actions/projectActions';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '69ch',
    },
    // marginTop: 72,
    maxWidth: 720,
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

function CreateProject(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [project, setProject] = useState({
    title: '',
    content: '',
  });

  function handleTextChange(event) {
    const { name, value } = event.target;

    setProject((prevProject) => {
      return {
        ...prevProject,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    props.createProject(project);
    setProject({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <Grid className={classes.gridContainer} container spacing={4}>
      <Grid item xs={12}>
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography variant='h5' component='h2'>
              Project Title
            </Typography>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                onChange={handleTextChange}
                id='standard-basic'
                label='Title'
                name='title'
                value={project.title}
              />
              <TextField
                onChange={handleTextChange}
                label='Project Description'
                name='content'
                multiline
                rows={2}
                rowsMax={6}
                value={project.content}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
