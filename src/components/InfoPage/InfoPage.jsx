import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./InfoPageStyles";
import Header from "../Header/Header";
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <>
    <Header />
    <Container>
      <Typography component='h2' variant="h4" textAlign='center' mt={5} sx={styles.header}>ABOUT BRICKS</Typography>
      <Grid container pt={6} spacing={6} justifyContent="center">
        <Grid item xs={6} sx={styles.ul}>
          <Typography component='h3' variant="h5" sx={{color: 'white', fontWeight: 'bold'}}>Future Additions:</Typography>
          <div>
            <ul>
              <li>Add custom LEGO sets with user photos</li>
              <li>Filter/Sort gallery alphabetically, by favorite, category, etc.</li>
              <li>View friends' galleries</li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid container pt={6} spacing={6} justifyContent="center">
        <Grid item xs={3} sx={styles.ul}>
          <Typography component='h3' variant="h5" sx={styles.stack}>Technology:</Typography>
          <div>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>React Redux</li>
              <li>Node</li>
              <li>Postgres</li>
              <li>Rebrickable API</li>
              <li>Material UI</li>
            </ul>
          </div>
        </Grid>

        <Grid item xs={3} sx={styles.ul}>
          <Typography component='h3' variant="h5" sx={styles.thankyou}>Thank you:</Typography>
          <ul>
            <li>My Wife</li>
            <li>Key / Instructors</li>
            <li>Prime Staff</li>
          </ul>
        </Grid>
      </Grid>
      
      <Grid container pt={6} spacing={6} justifyContent="center" sx={{color: 'white'}}>
        <Grid item xs={3} textAlign="center">
          <h4>Connect on LinkedIn</h4>
          <img
            src="../../public/LinkedIn_Profile_QR.png"
            alt="GitHub QR Code"
            height="200px"
          />
        </Grid>

        <Grid item xs={3} textAlign="center">
          <h4>View my GitHub</h4>
          <img
            src="../../public/GitHub_Profile_QR.png"
            alt="GitHub QR Code"
            height="200px"
          />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default InfoPage;
