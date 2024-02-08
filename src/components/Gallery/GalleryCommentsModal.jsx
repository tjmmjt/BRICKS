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
// 1. add textfield with expanded text box
// 2. create local state for open/close modal w/ functions
// 3. pass modal state, fns down as props
// 4. create saga gen func for patching comments
// 5. create patch router fn

function GalleryCommentsModal({ commentsModalOpen, closeCommentsModal, set }) {
  const dispatch = useDispatch();
  // local state for storing inputs
  const [input, setInput] = useState({
    id: set.id,
    comments: "",
  });

  const handleUpdate = () => {
    const payload = input;
    dispatch({ type: "UPDATE_COMMENTS", payload });
  };

  return (
    <div>
      <Modal
        open={commentsModalOpen}
        onClose={closeCommentsModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h3"
            gutterBottom
          >
            Add Comments:
          </Typography>
          <div>
            <TextField
              id="outlined-multiline-static"
              onChange={(event) => setInput({...input, comments: event.target.value})}
              multiline
              rows={4}
              fullWidth
              placeholder="add your comments here"
            />
          </div>
          <Button
            startIcon={<UpgradeIcon />}
            onClick={function () {
              handleUpdate();
              closeCommentsModal();
            }}
            variant="outlined"
            size="medium"
            color="primary"
            sx={{ mt: 2 }}
          >
            COMMENT
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default GalleryCommentsModal;
