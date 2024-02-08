import {
    Box,
    Button,
    Input,
    Modal,
    TextField,
    Typography,
  } from "@mui/material";
  import { useDispatch } from "react-redux";
  import UpgradeIcon from "@mui/icons-material/Upgrade";
  import { useState } from "react";
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    justifyContent: "center",
    textAlign: "center",
  };
  

  // ! New Component copied from UpdateModal - 

  function GalleryCommentModal({ open, close, set }) {
    const dispatch = useDispatch();
    // local state for storing inputs
    const [input, setInput] = useState({
      id: set.id,
      comments: ''
    });
  
    const handleUpdate = () => {
      const payload = input;
      dispatch({ type: "UPDATE_COMMENTS", payload });
      close;
    };
  
    return (
      <div>
        <Modal
          open={open}
          onClose={close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              gutterBottom
            >
              Add Comments:
            </Typography>
            
            <Button
              startIcon={<UpgradeIcon />}
              onClick={handleUpdate}
              variant="outlined"
              size="small"
              color="primary"
              sx={{ mt: 2 }}
            >
              Update
            </Button>
          </Box>
        </Modal>
      </div>
    );
  }
  
  export default GalleryCommentModal;
  