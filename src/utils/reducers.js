import { SHOW_MODAL, HIDE_MODAL } from "./actions";

const initialState = {
  isOpen: false,
  modalType: HIDE_MODAL
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isOpen: action.isOpen,
        modalType: action.type
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
