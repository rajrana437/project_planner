import React from 'react';

export const createUser = (users) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_USER', users });
  };
};
