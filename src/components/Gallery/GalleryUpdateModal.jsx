import {
  Box,
  Button,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useState } from "react";
import { Label } from "@mui/icons-material";

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

function GalleryUpdateModal({ open, close, set }) {
  const dispatch = useDispatch();
  // local state for storing inputs
  const [input, setInput] = useState({
    id: set.id,
    name: set.name,
    num_parts: set.num_parts,
    year: set.year,
    theme_id: set.theme_id
  });

  const handleUpdate = () => {
    const payload = input;
    dispatch({ type: "UPDATE_SET", payload });
    close
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
          <Typography id="modal-modal-title" variant="h4" component="h2" gutterBottom>
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
              label="Year"
              variant="standard"
              defaultValue={set.year}
              onChange={(event) =>
                setInput({ ...input, year: event.target.value })
              }
              sx={{ m: 1 }}
            />
            <TextField
              id="update-genre"
              label="Genre"
              variant="standard"
              defaultValue={set.theme_id}
              onChange={(event) =>
                setInput({ ...input, theme_id: event.target.value })
              }
              sx={{ m: 1 }}
            />
          </form>
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

export default GalleryUpdateModal;
