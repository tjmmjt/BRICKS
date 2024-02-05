const express = require('express');
const pool = require('../modules/pool');
const { default: axios } = require('axios');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
  // get api data
  // start with static code to test with postman
    const apiKey=process.env.REBRICKABLE_KEY
    const params = [req.params.id]
    console.log("REQ.PARAMS", params)

    axios.get(`https://rebrickable.com/api/v3/lego/sets/${params}-1?key=${apiKey}`)
    .then(response => {
        console.log(response.data)
        res.send(response.data)
    })
    .catch(err => {
        console.error('Error getting Rebrickable Request:', err)
        res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
