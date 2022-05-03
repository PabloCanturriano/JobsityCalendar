// React
import React, {useEffect, useState} from 'react';

// Libraries
import {Typography} from "@material-ui/core";
import {connect} from "react-redux";
import PropTypes from "prop-types";

// Components
import ReminderPill from "../ReminderPill/ReminderPill";

// Actions
import {showUpdateOrCreateReminderModal} from "../../../actions/modal/modal";
import {deleteAllReminderByDate} from "../../../actions/reminder/reminder";

// Utils
import {getByDate} from "../../../utils/date";

function DayCell({dateInfo, belongToActualMonth, totalCountOfDays, reminders, showUpdateOrCreateReminderModal, deleteAllReminderByDate}) {

    const [reminderForThisDay, setReminderForThisDay] = useState([]);
    useEffect(() => {
         setReminderForThisDay(getByDate( dateInfo.date, 'date', reminders ));
    }, [reminders])

    const day = new Date(dateInfo.date).getDay();
    const isWeekEnd = day === 5 || day === 6;

    const dayCellStyle = {
        border: "1px solid #d9d9d9",
        backgroundColor: belongToActualMonth ? '#ffffff' : '#ededed',
        height: totalCountOfDays > 35 ? 120 : 144,
        overflow: 'auto'
    }

    const basicButtonStyle = {
        width: '100%',
        border: 'none',
        borderWidth: '5px',
        cursor: 'pointer',
        color: 'white'
    }

    const addButton = {
        backgroundColor: '#488a37',
        ...basicButtonStyle
    }

    const deleteButton = {
        ...basicButtonStyle,
        backgroundColor: '#c04f4f'
    }

    const handleAddClick = () => {
        showUpdateOrCreateReminderModal({
            date: dateInfo.date,
            time: null,
            id: null,
            city: null,
            title: null
        })
    }

    const deleteAllHandler = () => {
        deleteAllReminderByDate(reminderForThisDay[0].date);
    }

    return (
        <div style={ dayCellStyle }>
            <Typography color={isWeekEnd ? 'error' : 'initial'} align="center">{dateInfo.day}</Typography>
            <button style={ addButton } onClick={handleAddClick}>Add reminder</button>

            <ReminderPill remindersForThisDay={reminderForThisDay} />
            {reminderForThisDay.length > 0 && <button style={deleteButton} onClick={deleteAllHandler}>Delete all reminders</button>}
        </div>
    )
}

DayCell.propTypes = {
    dateInfo: PropTypes.shape({
        month: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired
    }).isRequired,
    belongToActualMonth: PropTypes.bool.isRequired,
    totalCountOfDays: PropTypes.number.isRequired,
    reminders: PropTypes.array.isRequired,
    showUpdateOrCreateReminderModal: PropTypes.func.isRequired,
    deleteAllReminderByDate: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        reminders: state.reminders
    };
}

export default connect(mapStateToProps, {
    showUpdateOrCreateReminderModal,
    deleteAllReminderByDate
})(DayCell);
