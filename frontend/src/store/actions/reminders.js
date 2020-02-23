import axios from 'axios';

import { GET_REMINDERS } from './types';

export const getReminders = () => async dispatch => {
  const result = await axios.get('/api/reminders/');
  dispatch({
    type: GET_REMINDERS,
    payload: result.data
  });
};
