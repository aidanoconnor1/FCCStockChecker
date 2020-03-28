import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'



const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  questionmark:{
      size:'16px'
  },
  fab:{
      position:"relative",
      right:"-860px",
      top:"30px"
  }
}));

export default function Help() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const unallowed = '<>'

  return (
    <div>
      <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleOpen}>
      <FontAwesomeIcon  size='2x' icon={faQuestion} />
      </Fab>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Stock Checker Help</h2>
            <p id="transition-modal-description">This Stock Checker is For The FreeCodeCamp Infomation security and Quality Assurance Certifcate </p>
            <p>It displays up to date stock infomation from the NASDAQ, try searching for google by typing GOOG or mircosoft by typing MSFT</p>
            <p>`It displays all infomation in JSON Format as the task Requests, and only one like per stock per IP can be added to the MongoDB Database</p>
            <p>This App Uses Mongo, Express, React and NodeJS (MERN Stack)</p> 
            <p>Click on the {unallowed} button to see the challange or the GitHub icon for the project repo` </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}