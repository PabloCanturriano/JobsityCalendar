// React
import {useState} from "react";

// SCSS
import './reminderModal.scss';

// Libraries
import {connect} from "react-redux";
import { closeModal } from "../../../actions/modal/modal";
import Select from 'react-select';
import dayjs from "dayjs";
import PropTypes from "prop-types";

// Const
import {cities} from "../../../services/weather";

// Components
import Forecast from "../../Weather/Forecast/Forecast";

// Utils
import uniqueId from "../../../utils/fakeId";

// Actions
import {createReminder, updateReminder} from "../../../actions/reminder/reminder";

const customStyles = {
    input: (provided) => ({
        ...provided,
        width: '370px',
    }),
    container: (provided) => ({
        ...provided,
        color: 'black',
        maxWidth: '430px'
    }),
}

const ReminderModal = ({closeModal, createReminder, updateReminder, reminderData}) => {

    const [ reminder, setReminder ] = useState( {
        id: reminderData?.id || uniqueId(),
        title: reminderData.title || '',
        city: reminderData.city || cities[0].value,
        date: reminderData.date || dayjs(new Date()).format('YYYY-MM-DD'),
        time: reminderData.time || dayjs(new Date()).format( 'HH:mm:ss' )
    } );

    const isNewReminder = !reminderData?.id;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReminder(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        isNewReminder ? createReminder(reminder) : updateReminder(reminder);
        closeModal();
    }

    return (
        <div className="modal display-block">
            <section className="modal-main">
                <div className="card-form">
                    <div className="form-title">
                        <label>{isNewReminder ? 'Create reminder' : 'Update reminder'}</label>
                    </div>
                    <div className="form-body">

                        <Forecast city={reminder.city} date={reminder.date}/>

                        <div className="row">
                            <input data-testid="title-input" onChange={handleInputChange} value={reminder.title} type="text" name="title" maxLength={30} placeholder="Title" />
                        </div>
                        <div className="row" data-testid="city-combo">
                            <Select
                                cacheOptions
                                className="basic-single"
                                classNamePrefix="select"
                                name="city"
                                defaultInputValue={reminder.city}
                                styles={customStyles}
                                options={cities}
                                isSearchable
                                onChange={ ({value}) => handleInputChange( { target: { name: 'city', value } } )}
                            />
                        </div>

                        <div className="row">
                            <input data-testid="date-input" onChange={handleInputChange} className="datetime-input" name="date" type="Date" placeholder="date" value={reminder.date} />
                        </div>
                        <div className="row">
                            <input data-testid="time-input" onChange={handleInputChange} className="datetime-input" name="time" type="time" placeholder="time" value={reminder.time} />
                        </div>

                        <div className="row">
                            <button disabled={reminder.title.length === 0} onClick={handleSubmit} className="bgGreen">Save</button>
                            <button className="bgRed" onClick={closeModal}>Cancel</button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};


ReminderModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    createReminder: PropTypes.func.isRequired,
    updateReminder: PropTypes.func.isRequired,
    reminderData: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
        city: PropTypes.string,
    })
};

export default connect(null, {
    closeModal,
    createReminder,
    updateReminder
})(ReminderModal);
