import {
    CREATE_REMINDER,
    CREATE_REMINDER_FAILURE,
    CREATE_REMINDER_SUCCESS
  } from "../types";
  
  const initialState = {
    reminder: {},
    loading: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case CREATE_REMINDER:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case CREATE_REMINDER_SUCCESS:
        return {
          ...state,
          loading: false,
          reminder: action.reminder
        };
  
      case CREATE_REMINDER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
          reminder: {}
        };
      default:
        return state;
    }
  };
  