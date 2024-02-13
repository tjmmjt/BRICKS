import { Box, Button, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import headerStyles from "./headerStyles";

function Header() {
    const user = useSelector(store => store.user)
    const history = useHistory()

  return (
      <Container maxWidth={false} sx={headerStyles.header}>
        <Box width={125}>
          {user.id && (
            <Button variant="contained" sx={headerStyles.greenButtonStyle} onClick={() => history.push('/gallery')}>Gallery</Button>
          )}
        </Box>

        
        <Box mx={15}>
            <Link to="/user">
                <img
                    src="../../public/BRICKS_trimmed_no_background.png"
                    alt="Logo / Home"
                    height={130}
                />
            </Link>
        </Box>

        <Box width={125}>
          {/* If a user is logged in, show these links */}
          {user.id && (
            <Button variant="contained"sx={headerStyles.orangeButtonStyle} onClick={() => history.push('/add_set')}>Add Set</Button>
          )}
        </Box>
      </Container>
  );
}

export default Header;
