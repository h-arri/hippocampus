import axios from "axios";
import {
  GET_REMINDERS,
  GET_REMINDERS_FAILURE,
  GET_REMINDERS_SUCCESS,
  FILTER_REMINDERS,
  UPDATE_FILTERED,
} from "../types";

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
        dispatch(
          filterReminders({
            searchText: "",
            show: ["Active"],
          })
        );
      })
      .catch(({ error }) => {
        dispatch(getRemindersFailure(error));
      });
  };
}

const filterReminders = (filter) => ({
  type: FILTER_REMINDERS,
  filter
});

const updateFiltered = (data) => ({
  type: UPDATE_FILTERED,
  data,
});

export { getRemindersApi, filterReminders, updateFiltered };
