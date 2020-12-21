import {
  FILTER_REMINDERS,
  GET_REMINDERS,
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_SUCCESS,
  UPDATE_FILTERED,
} from "../types";
import { filterReminders, update } from "../../utils";

const initialState = {
  reminders: [],
  filtered: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_REMINDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        reminders: action.reminders,
        filtered: action.reminders,
      };
    case GET_REMINDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        reminders: [],
        filtered: [],
      };
    case FILTER_REMINDERS:
      return {
        ...state,
        filtered: filterReminders(state.reminders, action.filter),
      };
    case UPDATE_FILTERED:
      return {
        ...state,
        reminders: update(state.reminders, action.data),
        filtered: update(state.filtered, action.data),
      };
    default:
      return state;
  }
};
