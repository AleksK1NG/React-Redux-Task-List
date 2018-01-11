import * as actionTypes from './actionsTypes';

export const signedIn = (payload) => {
  return {
    type: actionTypes.SIGNED_IN,
    payload
  }
};

export const setTasks = (payload) => {
  return {
    type: actionTypes.SET_TASKS,
    payload,
  }
};

export const setCompletedTask = (payload) => {
  return {
    type: actionTypes.SET_COMPLETED_TASKS,
    payload,
  }
};