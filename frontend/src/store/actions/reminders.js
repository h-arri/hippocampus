import axios from "axios";
import { GET_REMINDERS, GET_REMINDERS_FAILURE, GET_REMINDERS_SUCCESS, FILTER_REMINDERS, UPDATE_FILTERED } from "../types";

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

export function getRemindersApi() {
  return dispatch => {
    dispatch(getReminders());
    return axios
      .get("/api/reminders/")
      .then(({ data }) => {
        dispatch({
          type: GET_REMINDERS_SUCCESS,
          reminders: data
        });
        dispatch({
          type: FILTER_REMINDERS,
          filter: {
            show: "Active", searchText: ""
          }
        });
      })
      .catch(({ error }) => {
        dispatch({
          type: GET_REMINDERS_FAILURE,
          error
        });
      });
  };
};

export const filterReminders = filter => ({
  type: FILTER_REMINDERS,
  filter
});

export const updateFiltered = data => ({
  type: UPDATE_FILTERED,
  data
});
