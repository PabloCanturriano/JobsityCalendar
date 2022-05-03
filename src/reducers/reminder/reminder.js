// Types
import {
    DELETE_REMINDER,
    UPDATE_REMINDERS,
    DELETE_ALL_REMINDERS_BY_DATE,
    CREATE_REMINDER
} from "../../actions/reminder/types";
import uniqueId from "../../utils/fakeId";

const initialState = [
    {
        id: uniqueId(),
        title: "title 1",
        date: "2022-05-02",
        time: "08:00:00",
        city: "Alabama",
    },
    {
        id: uniqueId(),
        title: "title 2",
        date: "2022-05-02",
        time: "09:00:00",
        city: "Alaska",
    },
    {
        id: uniqueId(),
        title: "title 3",
        date: "2022-05-02",
        time: "08:00:00",
        city: "Alaska",
    },
    {
        id: uniqueId(),
        title: "title 4",
        date: "2022-05-02",
        time: "09:00:00",
        city: "Alaska",
    },
    {
        id: uniqueId(),
        title: "title 5",
        date: "2022-05-04",
        time: "09:00:00",
        city: "Alaska",
    },
];

function reminderReducer(reminders = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_REMINDER:
            return [...reminders, payload];
        case UPDATE_REMINDERS:
            return reminders.map((reminder) => {
                if (reminder.id === payload.id) {
                    return {
                        ...reminder,
                        ...payload,
                    };
                } else {
                    return reminder;
                }
            });
        case DELETE_REMINDER:
            return reminders.filter(({ id }) => id !== payload.id);
        case DELETE_ALL_REMINDERS_BY_DATE:
            return reminders.filter(({ date }) => date !== payload.date);
        default:
            return reminders;
    }
}

export default reminderReducer;
