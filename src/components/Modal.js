import React from "react";
import { Modal } from "@material-ui/core";
import LoginPage from "../containers/login";
import { hideModal, showModal } from "../actions/modal";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center",
    position: "absolute",
    width: 750,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  }
}));

const modalTransition = {
  alertEnter: {
    opacity: 0,
    transform: "scale(0.9)"
  },
  alertEnterActive: {
    opacity: 1,
    transform: "translateX(0)",
    transition: "opacity 300ms, transform 300ms"
  },
  alertExit: {
    opacity: 1
  },
  alertExitActive: {
    opacity: 0,
    transform: "scale(0.9)",
    transition: "opacity 300ms, transform 300ms"
  }
};

const buttonStyle = {
  height: 25,
  width: 100,
  display: "inline-block",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #4CAF50",
  borderRadius: "4px"
};

const mapDispatchToFunc = {
  showModal,
  hideModal
};

const mapStateToProps = state => ({
  isModalOpen: state.isOpen
});

function ModalView({ showModal, isModalOpen, hideModal }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  return (
    <div>
      <button onClick={showModal} style={buttonStyle}>
        Login Page
      </button>
      <CSSTransition
        in={true}
        timeout={500}
        unmountOnExit
        classNames={modalTransition}
        onEnter={() => isModalOpen}
        onExited={() => hideModal}
      >
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={isModalOpen}
          onClose={hideModal}
        >
          <div style={modalStyle} className={classes.paper}>
            <LoginPage />
          </div>
        </Modal>
      </CSSTransition>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToFunc
)(ModalView);
