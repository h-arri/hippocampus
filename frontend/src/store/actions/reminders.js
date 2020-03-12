import axios from 'axios';

import {
  GET_REMINDERS,
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_SUCCESS
} from '../types';

export const getReminders = () => ({
  type: GET_REMINDERS
});

export const getRemindersSuccess = reminders => ({
    type: GET_REMINDERS_SUCCESS,
    reminders
});

export const getRemindersFailure = error => ({
  type: GET_REMINDERS_FAILURE,
  error
});

export function getRemindersAsync() {
  return dispatch => {
    dispatch(getReminders());
    return axios.get('/api/reminders/')
      .then(({ data }) => {
        dispatch({
          type: GET_REMINDERS_SUCCESS,
          reminders: data
        });
      })
      .catch(({ error }) => {
        dispatch({
          type: GET_REMINDERS_FAILURE,
          error
        });
      });
  };
}
