// React
import React from 'react';

// SCSS
import './ReminderPill.scss'

// Libraries
import {Typography} from "@material-ui/core";
import {connect} from "react-redux";
import PropTypes from "prop-types";

// Actions
import {showRemindersModal} from "../../../actions/modal/modal";

// Utils
import { groupBy } from "../../../utils/array";
import uniqueId from "../../../utils/fakeId";

function ReminderPill({ remindersForThisDay, showRemindersModal }) {

    const sortedReminders = remindersForThisDay.sort( (a,b) => a.time.localeCompare(b.time) );
    const groupedReminders = groupBy( sortedReminders, 'time' );

    const handleClickReminders = (reminder) => {
        showRemindersModal(reminder);
    }

    return (
        <>
            {Object.keys(groupedReminders).map(( time ) => {
                return (
                    <div className="pills"  key={uniqueId()} onClick={() => handleClickReminders(groupedReminders[time])}>
                        <Typography>{time.length > 7 ? time.slice(0,-3) : time} { groupedReminders[time].length } reminders</Typography>
                    </div>
                )
            })}
        </>
    )
}


ReminderPill.propTypes = {
    remindersForThisDay: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            time: PropTypes.string,
            city: PropTypes.string,
        })
    ),
    showRemindersModal: PropTypes.func.isRequired,
};

export default connect(null, {showRemindersModal})(ReminderPill);
