import {
    INCREMENT_MONTH,
    DECREMENT_MONTH,
    JUMP_TO_THIS_MONTH
} from "./types"

export const incrementMonth = () => (dispatch) => {
    dispatch({
        type: INCREMENT_MONTH,
    });
}

export const decrementMonth = () => (dispatch) => {
    dispatch({
        type: DECREMENT_MONTH,
    });
}

export const jumpToActualMonthAndYear = () => (dispatch) => {
    dispatch({
        type: JUMP_TO_THIS_MONTH,
    });
}

