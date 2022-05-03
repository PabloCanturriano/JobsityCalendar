// React
import React from 'react';

// Libraries
import {Box, Typography} from "@material-ui/core";

// Enums
import DaysNames from "../../../enums/daysNames";

// Utils
import uniqueId from "../../../utils/fakeId";

const weekBoxStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    mx: '7rem',
    my: '2rem',
}

function WeekBox() {

    return (
        <Box sx={{ ...weekBoxStyle }}>
            { Object.keys(DaysNames).map( (weekDay) => <Typography key={uniqueId()} align="center">{weekDay}</Typography> ) }
        </Box>
    )
}

export default WeekBox;
