export const SHOW_MODAL = "SHOW";
export const HIDE_MODAL = "HIDE";

export const showModal = () => ({
  type: SHOW_MODAL,
  isOpen: true
});

export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL,
    isOpen: false
  });
};
