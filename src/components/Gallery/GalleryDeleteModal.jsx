import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    justifyContent: 'center',
    textAlign: 'center'
};

function GalleryDeleteModal({ deleteModalOpen, closeDeleteModal, id }) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        const payload = id
        dispatch({type: 'DELETE_SET', payload})
      }

    return (
    <div>
      <Modal
        open={deleteModalOpen}
        onClose={closeDeleteModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Confirm Delete
          </Typography>
          <Button 
            startIcon={<DeleteIcon />}
            onClick={function () {
              handleDelete();
              closeDeleteModal();
            }}
            variant='outlined' 
            color='error' 
            sx={{mt: 2}}>Delete</Button>
        </Box>
      </Modal>
    </div>
    )
}

export default GalleryDeleteModal