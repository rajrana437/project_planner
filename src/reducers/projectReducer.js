import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  DELETE_PROJECT,
} from '../actions/types';

const projectReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return { items: [...state.items, action.project] };

    case CREATE_PROJECT_ERROR:
      console.log('create project error', action.err);
      return state;

    case DELETE_PROJECT:
      console.log(action.id);
      return {
        ...state,
        items: state.items.filter((item, index) => {
          return index !== action.id;
        }),
      };

    default:
      return state;
  }
};

export default projectReducer;
