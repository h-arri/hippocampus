import axios from "axios";
import { CREATE_REMINDER, CREATE_REMINDER_FAILURE, CREATE_REMINDER_SUCCESS } from "../types";


export const createReminder = () => ({
    type: CREATE_REMINDER
});

export const createReminderSuccess = reminder => ({
    type: CREATE_REMINDER_SUCCESS,
    reminder
});

export const createReminderFailure = error => ({
    type: CREATE_REMINDER_FAILURE,
    error
});

export function createReminderFromApi(reminder) {
    return dispatch => {
        dispatch(createReminder());
        return axios
            .post("/api/reminders/", reminder)
            .then(({ data }) => {
                dispatch({
                    type: CREATE_REMINDER_SUCCESS,
                    reminder: data
                });
            })
            .catch(({ error }) => {
                dispatch({
                    type: CREATE_REMINDER_FAILURE,
                    error
                });
            });
    };
}
