import {
    SHOW_MODAL,
    CLOSE_MODAL
} from "./types";

import {
    MODAL_TYPE_UPDATE_OR_CREATE_REMINDER,
    MODAL_SHOW_REMINDERS
} from "../../components/shared/Modal/modalTypes";

export const showUpdateOrCreateReminderModal = (reminder) => (dispatch) => {
    dispatch({
        type: SHOW_MODAL,
        modalType: MODAL_TYPE_UPDATE_OR_CREATE_REMINDER,
        modalProps: {
            handleClose: closeModal,
            reminderData: reminder
        }
    })
}

export const showRemindersModal = (reminders) => (dispatch) => {
    dispatch({
        type: SHOW_MODAL,
        modalType: MODAL_SHOW_REMINDERS,
        modalProps: {
            handleClose: closeModal,
            remindersData: reminders
        }
    })
}

export const closeModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_MODAL
    })
}
