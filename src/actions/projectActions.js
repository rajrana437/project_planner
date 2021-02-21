import React from 'react';

export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};

export const deleteProject = (id) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'DELETE_PROJECT', id });
  };
};
