// React
import React from 'react';

// Components
import ActionBar from "../components/Calendar/ActionBar/ActionBar";
import WeekBox from "../components/Calendar/WeekBox/WeekBox";
import DaysBox from "../components/Calendar/DaysBox/DayBox";
import ModalRoot from "../components/shared/Modal/ModalRoot";

function Calendar() {

    return (
        <>
            <ModalRoot />
            <ActionBar />
            <WeekBox />
            <DaysBox />
        </>
    )
}

export default Calendar;
