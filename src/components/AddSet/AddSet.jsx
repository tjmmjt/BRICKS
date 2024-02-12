import axios from "axios";
import { useState } from "react";
import ModalAddSet from "./ModalAddSet";
import { Button, Card, CardActions, CardContent, CardHeader, Container, Input, TextField, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// this page will have a form with an input and button
// user will input their lego set number and click search button
// the search button calls handleSearch() which makes an api call to rebrickable.router
// with the lego set id as axios.get('/:id')
// render the result with:
    // image, name, set number, total pieces, genre number, etc.

function AddSet() {
  // local state for storing input ID
  const [id, setId] = useState("");
  // local state for modal open/close boolean
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  // history
  const history = useHistory();
  // redux initialize dispatch
  const dispatch = useDispatch()

  const handleSearch = async (event) => {
    event.preventDefault();
    // dispatch search with payload === lego set id
    dispatch({type: 'SEARCH_SET', payload: id})
    // reset input
    setId("");
    // setOpen(true) to open Modal
    setOpen(true);
  };

  // TESTING
  // console.log('id:', id)
  // console.log('lego:', lego)

  return (
    <>
    <Container>
      
      <Card sx={{ maxWidth: 345, m: 'auto', p: 2}}>
        <CardHeader title="Add Set" />
        <CardContent sx={{pt: 0.5}}>
          <Typography variant="body2">
            Locate and enter your LEGO set number. This can be 
            found on the front of most LEGO set boxes and is typically 
            5 digits.
          </Typography>
        </CardContent>
        <CardActions sx={{p: 3}}>
          <form onSubmit={handleSearch}>
              <Input
                variant="outlined"
                placeholder="LEGO Set Number"
                type="text"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
              <Button onClick={handleSearch} variant="contained" size="small" sx={{mx: 1}}>Search</Button>
            </form>
        </CardActions>
      </Card>

    </Container>


      {/* <Container>
        <Grid container>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        </Grid>
      </Container> */}

      <ModalAddSet open={open} close={() => setOpen(false)} />
    </>
  );
}

export default AddSet;
