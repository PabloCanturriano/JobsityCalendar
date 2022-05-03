// Types
import {
    INCREMENT_MONTH,
    DECREMENT_MONTH,
    JUMP_TO_THIS_MONTH,
} from "../../actions/calendar/types";

import {getActualMonthAndYear, getNextMonth, getPreviousMonth} from '../../utils/date';

const initialState = getActualMonthAndYear();

function calendarReducer( state = initialState, action ){
    const {type} = action;

    switch (type) {
        case INCREMENT_MONTH:
            return getNextMonth(state.month, state.year);
        case DECREMENT_MONTH:
            return getPreviousMonth(state.month, state.year);
        case JUMP_TO_THIS_MONTH:
            return getActualMonthAndYear();
        default:
            return state;
    }
}

export default calendarReducer;
