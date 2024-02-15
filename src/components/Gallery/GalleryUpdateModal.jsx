import {
  Box,
  Button,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
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

function GalleryUpdateModal({ updateModalOpen, closeUpdateModal, set, userid }) {
  const dispatch = useDispatch();
  // local state for storing inputs
  const [input, setInput] = useState({
    name: set.name,
    num_parts: set.num_parts,
    year: set.year,
    theme_id: set.theme_id,
    id: set.id,
  });

  const handleUpdate = async () => {
    const payload = {input: input, userid: userid};
    dispatch({ type: "UPDATE_SET", payload });
  };

  return (
    <div>
      <Modal open={updateModalOpen} onClose={closeUpdateModal}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h3"
            gutterBottom
          >
            Update:
          </Typography>
          <form>
            <TextField
              required
              id="update-name"
              label="Name"
              variant="standard"
              defaultValue={set.name}
              onChange={(event) =>
                setInput({ ...input, name: event.target.value })
              }
              sx={{ m: 1 }}
            />
            <TextField
              id="update-pieces"
              label="# Pieces"
              variant="standard"
              defaultValue={set.num_parts}
              onChange={(event) =>
                setInput({ ...input, num_parts: event.target.value })
              }
              sx={{ m: 1 }}
            />
            <TextField
              id="update-year"
              type="number"
              label="Year"
              variant="standard"
              defaultValue={set.year}
              onChange={(event) =>
                setInput({ ...input, year: Number(event.target.value) })
              }
              sx={{ m: 1 }}
            />
            <TextField
              id="update-genre"
              type="number"
              label="Genre"
              variant="standard"
              defaultValue={set.theme_id}
              onChange={(event) =>
                setInput({ ...input, theme_id: Number(event.target.value) })
              }
              sx={{ m: 1 }}
            />
          </form>
          <Button
            onClick={function () {
              handleUpdate();
              closeUpdateModal();
            }}
            startIcon={<EditIcon />}
            variant="outlined"
            size="medium"
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

export default GalleryUpdateModal;
