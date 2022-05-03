import {
    CREATE_REMINDER, DELETE_ALL_REMINDERS_BY_DATE,
    DELETE_REMINDER,
    UPDATE_REMINDERS,
} from "./types";

export const createReminder = (reminder) => async (dispatch) => {
    //fake api call
    dispatch({
        type: CREATE_REMINDER,
        payload: reminder,
    });
};

export const updateReminder = (reminder) => async (dispatch) => {
    //fake api call
    dispatch({
        type: UPDATE_REMINDERS,
        payload: reminder,
    });
};
export const deleteReminder = (id) => async (dispatch) => {
    //fake api call
    dispatch({
        type: DELETE_REMINDER,
        payload: { id },
    });
};
export const deleteAllReminderByDate = (date) => async (dispatch) => {
    //fake api call
    dispatch({
        type: DELETE_ALL_REMINDERS_BY_DATE,
        payload: { date },
    });
};

