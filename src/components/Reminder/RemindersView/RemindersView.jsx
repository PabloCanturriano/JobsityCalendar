// SCSS
import './remindersView.scss';

// Libraries
import {connect} from "react-redux";

// Actions
import {closeModal, showUpdateOrCreateReminderModal} from "../../../actions/modal/modal";
import { deleteReminder } from "../../../actions/reminder/reminder";

// Utils
import uniqueId from "../../../utils/fakeId";
import PropTypes from "prop-types";

const RemindersView = ({closeModal, showUpdateOrCreateReminderModal, remindersData, deleteReminder }) => {

    const handleClickReminder = (reminder) => {
        closeModal();
        showUpdateOrCreateReminderModal(reminder);
    }

    const handleDeleteReminder = (id) => {
        deleteReminder(id);
        closeModal();
    }

    const ReminderCard = ({reminder}) => {

        const { title, date, time, city, id } = reminder;
        return (
            <div className="card">
                <div>
                    <h2>{title}</h2>
                    <p>{ date } { time }</p>
                    <p>{ city }</p>
                </div>
                <div className="options">
                    <div className="button-col">
                        <button onClick={() => handleClickReminder(reminder)} className="update-button">Edit</button>
                        <button onClick={() => handleDeleteReminder(id)} className="delete-button">Delete</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="modal display-block">
            <section className="modal-section">
                <div className="modal-body">
                    <div className="modal-header">
                        <h2> Reminders </h2>
                        <div className="align-center">
                            <button className="delete-button" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                    {remindersData.map( reminder => <ReminderCard key={uniqueId()} reminder={reminder} /> )}
                </div>
            </section>
        </div>
    );
};


RemindersView.propTypes = {
    closeModal: PropTypes.func.isRequired,
    showUpdateOrCreateReminderModal: PropTypes.func.isRequired,
    remindersData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            time: PropTypes.string,
            city: PropTypes.string,
        })
    ),
    deleteReminder: PropTypes.func.isRequired
};

export default connect(null, {
    closeModal,
    showUpdateOrCreateReminderModal,
    deleteReminder,
})(RemindersView);
