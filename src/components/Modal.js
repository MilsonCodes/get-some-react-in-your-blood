import React from "react";
import { Modal } from "@material-ui/core";
import LoginPage from "../containers/login";
import { hideModal, showModal } from "../utils/actions";
import { connect } from "react-redux";

const buttonStyle = {
  height: 25,
  width: 100,
  display: "inline-block",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #4CAF50",
  borderRadius: "4px"
};

const mapDispatchToFunc = dispatch => ({
  onClick: () => dispatch(showModal())
});

function ModalView({ dispatch }) {
  return (
    <div>
      <button onClick={null} style={buttonStyle}>
        Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={false}
        onClose={hideModal}
      >
        <div>
          <LoginPage />
        </div>
      </Modal>
    </div>
  );
}

export default connect(mapDispatchToFunc)(ModalView);
