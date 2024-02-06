const express = require('express')
const router = express.Router()
const pool = require('../modules/pool')

// post search result to bricks DB
// need queryText & params

router.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "gallery_item" (
		user_id,
		set_num,
		name,
		year,
		theme_id,
		num_parts,
		set_img_url,
		set_url,
		comments
	)
	VALUES(
		$1,
		$2,
		$3,
		$4,
		$5,
		$6,
		$7,
		$8,
		$9'
	);
    `
    const user = req.body.user
    const lego = req.body.searchReducer
    const queryParams = [user.id, lego.set_num, lego.name, lego.year, lego.theme_id, lego.num_parts, lego.set_img_url, lego.set_url, lego.comments]
    // ? combine user and searchReducer into a single req.body
    pool.query(queryText, queryParams)
    .then(result => {
        res.send(result.rows)
    })
    .catch(err => {
        console.error('Error posting LEGO set to bricks DB:', err)
        res.sendStatus(500)
    })
})

module.exports = router