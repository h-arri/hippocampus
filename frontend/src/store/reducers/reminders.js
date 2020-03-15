import {
  GET_REMINDERS,
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_SUCCESS
} from "../types";

const initialState = {
  reminders: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case GET_REMINDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        reminders: action.reminders
      };

    case GET_REMINDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        reminders: []
      };
    default:
      return state;
  }
};
