import {
  GET_REMINDERS,
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_SUCCESS,
  FILTER_REMINDERS,
  SEARCH_REMINDERS
} from "../types";
import { filterByShow, search } from "../../utils";

const initialState = {
  reminders: [],
  filtered: [],
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
        reminders: action.reminders,
        filtered: action.reminders
      };

    case GET_REMINDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        reminders: [],
        filtered: []
      };
    case FILTER_REMINDERS:
      return {
        ...state,
        filtered: filterByShow(state.reminders, action.filter)
      };
    case SEARCH_REMINDERS:
      return {
        ...state,
        filtered: search(state.reminders, action.searchText)
      };
    default:
      return state;
  }
};
