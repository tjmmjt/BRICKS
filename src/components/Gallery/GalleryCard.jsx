import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCommentIcon from '@mui/icons-material/AddComment';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import GalleryDeleteModal from "./GalleryDeleteModal";
import GalleryUpdateModal from "./GalleryUpdateModal";
import GalleryCommentsModal from "./GalleryCommentsModal";

function GalleryCard({ set, userid }) {
  const dispatch = useDispatch()
  // Delete Modal state/prompts
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const promptDelete = () => setDeleteModalOpen(true);
  const closeDeleteModal = () => setDeleteModalOpen(false);

  // Update Modal state/prompts
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const promptUpdate = () => setUpdateModalOpen(true);
  const closeUpdateModal = () => setUpdateModalOpen(false);

  // Comments Modal state/prompts
  const [commentsModalOpen, setCommentsModalOpen] = useState(false);
  const promptComments = () => setCommentsModalOpen(true);
  const closeCommentsModal = () => setCommentsModalOpen(false);



  return (
  <>

    <Card sx={{ maxWidth: 600, p: 2}}>
      <Typography variant="h5" m={2} mb={0} noWrap>{set.name}</Typography>
      <Typography variant="subtitle" mx={2} noWrap>{set.set_num}</Typography>
      <CardMedia
        component="img"
        height="200"
        image={set.set_img_url}
        alt={set.name}
        sx={{objectFit: "contain", mt: 3}}
      />
      <CardContent>
        <Typography variant="body1"><b>Total Pieces:</b> {set.num_parts}</Typography>
        <Typography variant="body1"><b>Year:</b> {set.year}</Typography>
        <Typography variant="body1"><b>Category:</b> {set.theme_id}</Typography>
        <Typography variant="body1"><b>Comments:</b></Typography>
        <Typography variant="body2" color="text.secondary">
            {set.comments}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <IconButton onClick={() => dispatch({type: 'FAVORITE', payload: {userid: userid, setid: set.id}})} aria-label="add to favorites">
          {set.favorite ? <FavoriteIcon fontSize="large" sx={{color: 'red'}}/> : <FavoriteIcon fontSize="large"/> }
        </IconButton>
        <IconButton onClick={promptComments} aria-label="add comments">
          <AddCommentIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={promptUpdate} aria-label="edit">
          <EditIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={promptDelete} aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>

    <GalleryDeleteModal deleteModalOpen={deleteModalOpen} closeDeleteModal={closeDeleteModal} setid={set.id} userid={userid}/>
    <GalleryUpdateModal updateModalOpen={updateModalOpen} closeUpdateModal={closeUpdateModal} set={set} userid={userid} />
    <GalleryCommentsModal commentsModalOpen={commentsModalOpen} closeCommentsModal={closeCommentsModal} set={set} userid={userid} />
  </>
  );
}

export default GalleryCard
