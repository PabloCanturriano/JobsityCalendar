// React
import React, {useEffect, useState} from 'react';

// SCSS
import './forecast.scss'

// Services
import {getCityInfo, getIconLink} from "../../../services/weather";

// Libraries
import {CircularProgress} from "@material-ui/core";
import PropTypes from "prop-types";

function Forecast({ city = '', date }) {

    const [forecast, setForecast] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect( async () => {
        setIsLoading(false);
        setForecast(await getCityInfo(city, date));
        setIsLoading(true);
    }, [city, date] )

    return (
        <div className="forecast-container">
            {isLoading ?
                <>
                    <img src={getIconLink(forecast.icon)} alt="icon"/>
                    <label>{forecast.condition}</label>
                    <label>{forecast.description}</label>
                </>
             :
                <>
                    <CircularProgress />
                </>
            }
        </div>

    )
}


Forecast.propTypes = {
    city: PropTypes.string,
    date: PropTypes.string
};

export default Forecast;
