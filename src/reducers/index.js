// Redux
import { combineReducers} from 'redux';

// Reducers
import reminderReducer from "./reminder/reminder";
import calendarReducer from "./calendar/calendar";
import modalReducer from "./modal/modal";

const reducers = {
    calendars: calendarReducer,
    reminders: reminderReducer,
    modal: modalReducer
};

export default combineReducers(reducers);
