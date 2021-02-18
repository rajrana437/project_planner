import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/types';

// const initState = {
//   projects: [],
// };

const projectReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log('newww', state);
      return { items: [...state.items, action.project] };

    case CREATE_PROJECT_ERROR:
      console.log('create project error', action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
