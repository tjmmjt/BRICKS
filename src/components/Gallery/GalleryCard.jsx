import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCommentIcon from '@mui/icons-material/AddComment';

function GalleryCard({ image, name, pieces, genre, year, setnumber, comments }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <Typography variant="h5" m={2} mb={0} noWrap>{name}</Typography>
      <Typography variant="subtitle" mx={2} noWrap>Set Num: {setnumber}</Typography>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{objectFit: "contain", mt: 5}}
      />
      <CardContent>
        <Typography variant="body1"><b>Total Pieces:</b> {pieces}</Typography>
        <Typography variant="body1"><b>Year:</b> {year}</Typography>
        <Typography variant="body1"><b>Genre:</b> {genre}</Typography>
        <Typography variant="body1"><b>Comments:</b></Typography>
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
