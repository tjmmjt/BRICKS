import React from "react";
import { Container, Grid, Typography } from "@mui/material";
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
        <Grid container pt={10} spacing={6} justifyContent="center">
          <Grid item xs={6} sx={styles.ul}>
            <Typography
              component="h3"
              variant="h5"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Future Additions:
            </Typography>
            <div>
              <ul>
                <li>
                  Filter/Sort gallery by favorite, category,
                  etc.
                </li>
                <li>Add custom LEGO sets with user photos</li>
                <li>View friends' galleries</li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <Grid container pt={6} spacing={6} justifyContent="center">
          <Grid item xs={3} sx={styles.ul}>
            <Typography component="h3" variant="h5" sx={styles.stack}>
              Technology:
            </Typography>
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
            <Typography component="h3" variant="h5" sx={styles.thankyou}>
              Thank you:
            </Typography>
            <ul>
              <li>My Wife</li>
              <li>Key / Instructors</li>
              <li>Prime Staff including student life and career development</li>
              <li>Peridot Cohort</li>
            </ul>
          </Grid>
        </Grid>

        <Grid
          container
          pt={6}
          spacing={6}
          justifyContent="center"
          sx={{ color: "white" }}
        >
          <Grid item xs={3} textAlign="center">
            <h4>Connect on LinkedIn</h4>
            <img
              src="/LinkedIn_Profile_QR.png"
              alt="GitHub QR Code"
              height="200px"
            />
          </Grid>

          <Grid item xs={3} textAlign="center">
            <h4>View my GitHub</h4>
            <img
              src="/GitHub_Profile_QR.png"
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
