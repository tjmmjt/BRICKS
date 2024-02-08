const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// when user searches LEGO set, modal appears with option to Add to their gallery
// when Added, the LEGO set and user data are posted to bricks database gallery_item table

router.post("/", (req, res) => {
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
	VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);
	`;

  const user = req.body.user;
  const lego = req.body.searchReducer;
  const queryParams = [
    user.id,
    lego.set_num,
    lego.name,
    lego.year,
    lego.theme_id,
    lego.num_parts,
    lego.set_img_url,
    lego.set_url,
    lego.comments,
  ];

  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.error("Error posting LEGO set to bricks DB:", err);
      res.sendStatus(500);
    });
});


router.get('/', (req, res) => {
  const queryText = `
    SELECT * FROM "gallery_item";
  `
  pool.query(queryText)
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.error('Error Getting Gallery', err);
    res.sendStatus(500)
  })
})

router.delete('/:id', (req, res) => {
  const queryText = `
    DELETE FROM "gallery_item"
    WHERE id=($1);
  `
  const queryParams = [req.params.id]
  pool.query(queryText, queryParams)
  .then(result => {
    res.sendStatus(200)
  })
  .catch(err => {
    console.error('Error deleting set', err)
    res.sendStatus(500)
  })
})

router.patch('/', (req, res) => {
    const queryText = `
    UPDATE "gallery_item"
      SET (name, num_parts, year, theme_id) = ($1, $2, $3, $4)
      WHERE id=$5;
      `;
  
    const lego = req.body;

    const queryParams = [
      lego.name,
      lego.num_parts,
      lego.year,
      lego.theme_id,
      lego.id
    ];
    console.log('req.body', req.body)
    console.log('queryParams:', queryParams)
    pool
      .query(queryText, queryParams)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });


module.exports = router;
