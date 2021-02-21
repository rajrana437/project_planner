import { CREATE_USER } from '../actions/types';

const projectReducer = (state = { usersList: [] }, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log('newwwUsers', state);
      return { ...state, usersList: [...state.usersList, action.users] };

    default:
      return state;
  }
};

export default projectReducer;
