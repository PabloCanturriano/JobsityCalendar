import {
    SHOW_MODAL,
    CLOSE_MODAL
} from "../../actions/modal/types";

const initialState = {
    modalType: null,
    modalProps: {}
}

function modalReducer(state = initialState, action) {

    const { modalType, modalProps, type } = action;

    switch (type) {
        case SHOW_MODAL:
            return {
                modalType,
                modalProps
            }
        case CLOSE_MODAL:
            return initialState
        default:
            return state
    }
}

export default modalReducer;
