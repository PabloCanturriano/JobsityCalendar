// Libraries
import {connect} from "react-redux";
import PropTypes from "prop-types";

// Components
import ReminderModal from '../../Reminder/ReminderModal/ReminderModal'
import RemindersView from "../../Reminder/RemindersView/RemindersView";

// Consts
import {MODAL_SHOW_REMINDERS, MODAL_TYPE_UPDATE_OR_CREATE_REMINDER} from "./modalTypes";

const MODAL_COMPONENTS = {
    [MODAL_TYPE_UPDATE_OR_CREATE_REMINDER]: ReminderModal,
    [MODAL_SHOW_REMINDERS]: RemindersView
}

const ModalRoot = ({ modalType, modalProps }) => {

    if (!modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal {...modalProps} />
}


ModalRoot.propTypes = {
    modalType: PropTypes.string,
    modalProps: PropTypes.object
};

export default connect(
    state => state.modal
)(ModalRoot)
