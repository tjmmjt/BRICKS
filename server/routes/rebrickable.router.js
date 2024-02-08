const express = require("express");
const pool = require("../modules/pool");
const { default: axios } = require("axios");
const router = express.Router();

// // complete
router.get("/:id", (req, res) => {
  // used for searching a specific lego set by lego set id
  // this API request return data which will then be stored in state
  // && rendered on the search component modal
  // if its the correct lego set, user will click Add Set which will POST
  // lego set to gallery_items DB which is rendered on the users Gallery page
  const apiKey = process.env.REBRICKABLE_KEY;
  const params = [req.params.id];
  // console.log("REQ.PARAMS", params);

  axios
    .get(`https://rebrickable.com/api/v3/lego/sets/${params}-1?key=${apiKey}`)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error("Error getting Rebrickable Request:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
