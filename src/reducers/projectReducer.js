import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/types';

const initState = {
  projects: [],
};

const projectReducer = (state = initState, action) => {
  let newProjects = '';
  switch (action.type) {
    case CREATE_PROJECT:
      //   console.log('created project', action.project);
      return { ...state, projects: action.project };

    case CREATE_PROJECT_ERROR:
      console.log('create project error', action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
