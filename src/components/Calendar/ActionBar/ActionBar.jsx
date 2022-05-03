// React
import React from "react";

// Libraries
import {connect} from "react-redux";
import {Box, Button, IconButton, Typography} from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PropTypes from "prop-types";

// Enums
import MonthsNames from "../../../enums/monthsNames";

// Actions
import { incrementMonth, decrementMonth, jumpToActualMonthAndYear } from "../../../actions/calendar/calendar"
import { showUpdateOrCreateReminderModal } from "../../../actions/modal/modal";

const boxStyles = {
    bgcolor: '#74cf70',
    flexGrow: 1,
    p: 2
};

const monthWidth = {
    width: 200
}

function ActionBar ({ calendar, incrementMonth, decrementMonth, jumpToActualMonthAndYear, showUpdateOrCreateReminderModal }) {

    return (
        <Box sx={{ ...boxStyles }}
             display="flex"
             justifyContent="space-around"
        >
            <Box>
                <Button color="default" variant="contained" onClick={() => jumpToActualMonthAndYear()}>
                    <Typography>Jump to Today</Typography>
                </Button>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
            >
                <IconButton onClick={ () => decrementMonth() }>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Button>
                    <Typography style={monthWidth}>{Object.keys(MonthsNames).find(key => MonthsNames[key] === calendar.month)} {calendar.year}</Typography>
                </Button>
                <IconButton onClick={ () => incrementMonth() }>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
            <Box>
                <Button color="primary" variant="contained" onClick={showUpdateOrCreateReminderModal}>
                    <Typography>Add reminder</Typography>
                </Button>
            </Box>
        </Box>
    )
}

ActionBar.propTypes = {
    calendar: PropTypes.shape({
        month: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired
    }).isRequired,
    incrementMonth: PropTypes.func.isRequired,
    decrementMonth: PropTypes.func.isRequired,
    jumpToActualMonthAndYear: PropTypes.func.isRequired,
    showUpdateOrCreateReminderModal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        calendar: state.calendars,
        modal: state.modal
    };
}
export default connect(mapStateToProps, {
    incrementMonth,
    decrementMonth,
    jumpToActualMonthAndYear,
    showUpdateOrCreateReminderModal
})(ActionBar);
