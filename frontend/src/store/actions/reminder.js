import axios from "axios";
import {
    CREATE_REMINDER,
    CREATE_REMINDER_FAILURE,
    CREATE_REMINDER_SUCCESS,
    DELETE_REMINDER,
    DELETE_REMINDER_SUCCESS,
    DELETE_REMINDER_FAILURE,
    UPDATE_REMINDER,
    UPDATE_REMINDER_SUCCESS,
    UPDATE_REMINDER_FAILURE
} from "../types";
import { getRemindersApi } from './reminders';


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

export function createReminderApi(reminder) {
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


export const deleteReminder = () => ({
    type: DELETE_REMINDER
});

export const deleteReminderSuccess = reminder => ({
    type: DELETE_REMINDER_SUCCESS,
    reminder
});

export const deleteReminderFailure = error => ({
    type: DELETE_REMINDER_FAILURE,
    error
});

export function deleteReminderApi(id) {
    return dispatch => {
        dispatch(deleteReminder());
        return axios
            .delete(`/api/reminders/${id}`)
            .then(({ data }) => {
                dispatch({
                    type: DELETE_REMINDER_SUCCESS,
                    reminder: data === '' ? {} : data
                });
                dispatch(getRemindersApi());
            })
            .catch(({ error }) => {
                dispatch({
                    type: DELETE_REMINDER_FAILURE,
                    error
                });
            });
    };
}


export const updateReminder = () => ({
    type: UPDATE_REMINDER
});

export const updateReminderSuccess = reminder => ({
    type: UPDATE_REMINDER_SUCCESS,
    reminder
});

export const updateReminderFailure = error => ({
    type: UPDATE_REMINDER_FAILURE,
    error
});

export function updateReminderApi(reminder) {
    return dispatch => {
        dispatch(updateReminder());
        return axios
            .put(`/api/reminders/${reminder.id}/`, reminder)
            .then(({ data }) => {
                dispatch({
                    type: UPDATE_REMINDER_SUCCESS,
                    reminder: data
                });
            })
            .catch(({ error }) => {
                dispatch({
                    type: UPDATE_REMINDER_FAILURE,
                    error
                });
            });
    };
}
