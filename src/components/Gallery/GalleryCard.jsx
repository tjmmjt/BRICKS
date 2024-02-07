import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCommentIcon from '@mui/icons-material/AddComment';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { useState } from "react";
import GalleryDeleteModal from "./GalleryDeleteModal";

function GalleryCard({ set }) {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false);
  const promptDelete = () => setOpen(true)
  const handleClose = () => setOpen(false);

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
        <Typography variant="body1"><b>Genre:</b> {set.theme_id}</Typography>
        <Typography variant="body1"><b>Comments:</b></Typography>
        <Typography variant="body2" color="text.secondary">
            ...add comments here
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="add comments">
          <AddCommentIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={promptDelete} aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>

    <GalleryDeleteModal open={open} close={handleClose} id={set.id}/>
  </>
  );
}

export default GalleryCard
