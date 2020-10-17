import axios from "axios";
import {
    CREATE_REMINDER,
    CREATE_REMINDER_FAILURE,
    CREATE_REMINDER_SUCCESS,
    DELETE_REMINDER,
    DELETE_REMINDER_FAILURE,
    DELETE_REMINDER_SUCCESS,
    UPDATE_REMINDER,
    UPDATE_REMINDER_FAILURE,
    UPDATE_REMINDER_SUCCESS
} from "../types";
import { updateFiltered } from './reminders';


const createReminder = () => ({
    type: CREATE_REMINDER
});

const createReminderSuccess = reminder => ({
    type: CREATE_REMINDER_SUCCESS,
    reminder
});

const createReminderFailure = error => ({
    type: CREATE_REMINDER_FAILURE,
    error
});

function createReminderApi(reminder) {
    return dispatch => {
        dispatch(createReminder());
        return axios
            .post("/api/reminders/", reminder)
            .then(({ data }) => {
                dispatch(createReminderSuccess(data));
            })
            .catch(({ error }) => {
                dispatch(createReminderFailure(data));
            });
    };
}


const deleteReminder = () => ({
    type: DELETE_REMINDER
});

const deleteReminderSuccess = reminder => ({
    type: DELETE_REMINDER_SUCCESS,
    reminder
});

const deleteReminderFailure = error => ({
    type: DELETE_REMINDER_FAILURE,
    error
});

function deleteReminderApi(id) {
    return dispatch => {
        dispatch(deleteReminder());
        return axios
            .delete(`/api/reminders/${id}`)
            .then(({ data }) => {
                dispatch(deleteReminderSuccess(data === '' ? {} : data));
                dispatch(updateFiltered({ id }));
            })
            .catch(({ error }) => {
                dispatch(deleteReminderFailure(error));
            });
    };
}


const updateReminder = () => ({
    type: UPDATE_REMINDER
});

const updateReminderSuccess = reminder => ({
    type: UPDATE_REMINDER_SUCCESS,
    reminder
});

const updateReminderFailure = error => ({
    type: UPDATE_REMINDER_FAILURE,
    error
});

function updateReminderApi(reminder) {
    return dispatch => {
        dispatch(updateReminder());
        return axios
            .put(`/api/reminders/${reminder.id}/`, reminder)
            .then(({ data }) => {
                dispatch(updateReminderSuccess(data));
                dispatch(updateFiltered({ reminder: data }));
            })
            .catch(({ error }) => {
                dispatch(updateReminderFailure(error));
            });
    };
}

export { createReminderApi, deleteReminderApi, updateReminderApi };
