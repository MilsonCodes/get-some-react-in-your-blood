import React from "react";
import { Modal } from "@material-ui/core";
import LoginPage from "../containers/login";
import { handleOpen } from "../utils/actions";

const buttonStyle = {
  height: 25,
  width: 100,
  display: "inline-block",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #4CAF50",
  borderRadius: "4px"
};

function ModalView(props) {
  const [setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} style={buttonStyle}>
        Login
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={true}
        onClose={handleClose}
      >
        <div>
          <LoginPage />
        </div>
      </Modal>
    </div>
  );
}

export default ModalView;
