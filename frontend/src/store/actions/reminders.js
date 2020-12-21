import axios from "axios";
import {
  FILTER_REMINDERS,
  GET_REMINDERS,
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_SUCCESS,
  UPDATE_FILTERED,
} from "../types";
import store from "../../store";

const getReminders = () => ({
  type: GET_REMINDERS,
});

const getRemindersSuccess = (reminders) => ({
  type: GET_REMINDERS_SUCCESS,
  reminders,
});

const getRemindersFailure = (error) => ({
  type: GET_REMINDERS_FAILURE,
  error,
});

function getRemindersApi() {
  return (dispatch) => {
    dispatch(getReminders());
    return axios
      .get("/api/reminders/")
      .then(({ data }) => {
        dispatch(getRemindersSuccess(data));
        dispatch(filterReminders(store.getState().filter));
      })
      .catch(({ error }) => {
        dispatch(getRemindersFailure(error));
      });
  };
}

const filterReminders = (filter) => ({
  type: FILTER_REMINDERS,
  filter,
});

const updateFiltered = (data) => ({
  type: UPDATE_FILTERED,
  data,
});

export { getRemindersApi, filterReminders, updateFiltered };
