import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  justifyContent: 'center'
};

function ModalAddSet(props) {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // ? Moved local state to <AddSet /> where handleSearch() => setOpen(true)

  // initialize dispatch and useSelector with search and user data
  const dispatch = useDispatch()
  const searchReducer = useSelector(store => store.searchReducer)
  const user = useSelector(store => store.user)

  const handleAdd = (event) => {
    event.preventDefault()
    // must send a payload, tried using useSelector hook in saga gen func and it errored for breaking rules of hooks
    const payload = {searchReducer: searchReducer, user: user}
    dispatch({type: 'ADD_SET', payload})
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {searchReducer.name}
          </Typography>
          <img src={searchReducer.set_img_url} alt={searchReducer.name} />
          <Button onClick={handleAdd} variant='contained' color='success' sx={{mt: 2}}>Add</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalAddSet