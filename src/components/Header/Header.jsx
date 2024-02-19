import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import headerStyles from "./headerStyles";
import HamburgerMenu from "./HamburgerMenu";
import FloatingAddBtn from "../Gallery/FloatingAddBtn";

function Header() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  return (
    <Grid container sx={headerStyles.header}>
      <Grid item xs={4} pl={10}>
        <Link to="/user">
          <img
            src="public/BRICKS_no_background.png"
            alt="Logo / Home"
            height={130}
          />
        </Link>
      </Grid>

      <Grid item xs={4} pt={2} textAlign={"center"}>
        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          color="white"
          sx={{ textShadow: "2px 2px 5px black" }}
        >
          Welcome, {user.username}!
        </Typography>
      </Grid>

      <Grid item xs={4} textAlign="right" pr={10} sx={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
        {/* <Box mr={3} variant='info'><FloatingAddBtn /></Box> */}
        <Box><HamburgerMenu /></Box>
      </Grid>
    </Grid>
  );
}

export default Header;
