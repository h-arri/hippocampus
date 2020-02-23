import { GET_REMINDERS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
