// React
import React from 'react';

// Libraries
import {Box} from "@material-ui/core";
import {connect} from "react-redux";
import PropTypes from "prop-types";

// Components
import DayCell from "../DayCell/DayCell";

//Utils
import { getCalendarDays } from '../../../utils/date';
import uniqueId from "../../../utils/fakeId";


const daysBoxStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 5fr)',
    gap: '1px',
    mx: '7rem',
    my: '3rem',
}

function DayBox({ calendar }) {

    const calendarMonthInfo = getCalendarDays(calendar.month, calendar.year);

    return calendarMonthInfo && (
        <Box sx={daysBoxStyle}>
            {calendarMonthInfo.previousMonthDays.map( (dateInfo) =>
                <DayCell
                    key={uniqueId()}
                    totalCountOfDays={calendarMonthInfo.totalCount}
                    dateInfo={dateInfo}
                    belongToActualMonth={false} /> )
            }
            {calendarMonthInfo.monthDays.map( (dateInfo) =>
                <DayCell
                    key={uniqueId()}
                    totalCountOfDays={calendarMonthInfo.totalCount}
                    dateInfo={dateInfo}
                    belongToActualMonth={true} /> )
            }
            {calendarMonthInfo.nextMonthDays.map( (dateInfo) =>
                <DayCell
                    key={uniqueId()}
                    totalCountOfDays={calendarMonthInfo.totalCount}
                    dateInfo={dateInfo}
                    belongToActualMonth={false} /> )
            }
        </Box>
    )
}

DayBox.propTypes = {
    calendar: PropTypes.shape({
        day: PropTypes.number,
        month: PropTypes.number,
        year: PropTypes.number,
        date: PropTypes.string,
    }).isRequired
};

const mapStateToProps = (state) => {
    return {
        calendar: state.calendars
    };
}
export default connect(mapStateToProps)(DayBox);
