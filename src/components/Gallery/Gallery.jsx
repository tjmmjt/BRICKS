import { Box, Container, Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GalleryCard from "./GalleryCard";

function Gallery() {
  // console.log("in Gallery()");
  const dispatch = useDispatch();
  const store = useSelector((store) => store.galleryReducer);
  // console.log('galleryReducer', store)
  // const fetchGallery = dispatch({type: 'FETCH_GALLERY'})
  useEffect(() => {
    dispatch({ type: "FETCH_GALLERY" });
  }, []);

  return (
    <>
      <Container>
        <h2>Gallery</h2>
        <Grid container spacing={3}>
          {store.map((set, i) => (
            <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <GalleryCard 
                  raised
                  set={set}
                />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Gallery;
