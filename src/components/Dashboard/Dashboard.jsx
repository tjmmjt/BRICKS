import { Box, Button, Card, Typography } from "@mui/material";
import styles from "./DashboardStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Dashboard() {
  useEffect(() => {
    dispatch({ type: "FETCH_STATS", payload: user.id });
  }, []);
  const history = useHistory()
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const stats = useSelector((store) => store.statsReducer);
  //   console.log("USER:", user);
  //   console.log("STATS", stats);



  return (
    <>
      <Box textAlign="center" mt={8} maxWidth={'40%'}>
        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          color="white"
          sx={{ textShadow: "2px 2px 5px black" }}
        >
          Welcome, <br /> {user.username.toUpperCase()}#{user.id}!
        </Typography>

        <Card
          sx={{
            mt: 2,
            p: 4,
            borderRadius: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            textShadow: "1px 1px 30px black;",
          }}
        >
          <Box mt={3}>
            <Typography
              component="h3"
              variant="h4"
              fontWeight="bold"
              color="rgba(255, 174, 1, 1)"
            >
              Your build statistics:
            </Typography>
          </Box>

          <Box my={3}>
            <Typography component="h6" variant="h5" color="white">
              <b>Total Sets:</b> {stats.total_sets}
            </Typography>
            <Typography component="h6" variant="h5" color="white">
              <b>Total Pieces:</b>{" "}
              {Number(stats.total_num_parts).toLocaleString("en-US")}
            </Typography>
            <Typography component="h6" variant="h5" color="white">
              <b>Categories:</b> {stats.all_theme_id}
            </Typography>
          </Box>
        </Card>

        <Box mt={2}>
          <Button onClick={() => history.push('/gallery')} variant="contained" sx={styles.greenButtonStyle}>
            GALLERY
          </Button>
          <Button onClick={() => history.push('/add_set')} variant="contained" sx={styles.orangeButtonStyle}>
            ADD SET
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
