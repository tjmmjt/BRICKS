import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCommentIcon from '@mui/icons-material/AddComment';

function GalleryCard({ image, name, pieces, genre, comments }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={name}
        subheader={genre}
      />
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h6">Total Pieces: {pieces}</Typography>
        <Typography variant="h6">Genre: {genre}</Typography>
        <Typography variant="h6">Comments:</Typography>
        <Typography variant="body2" color="text.secondary">
            Add Comments Here:
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add comments">
          <AddCommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default GalleryCard
