import { Box, Container, Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GalleryCard from "./GalleryCard";
import Header from "../Header/Header";

function Gallery() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.galleryReducer);
  const userid = useSelector(store => store.user.id)
  // console.log('galleryReducer', store)
  console.log('userid', userid)
  useEffect(() => {
    dispatch({ type: "FETCH_GALLERY", payload: userid});
  }, []);

  return (
    <>
    <Header />
      <Container>
        <Grid container mt={2} px={4} spacing={5} sx={{alignItems: 'center'}}>
          {store.map((set, i) => (
            <Grid item key={i} xs={12} sm={6} md={4} lg={4}>
              <GalleryCard raised set={set} userid={userid} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Gallery;
