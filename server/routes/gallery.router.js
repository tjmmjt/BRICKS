const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// ! POST a new LEGO set to gallery_items with user.id
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

// ! GET all LEGO sets
// TODO get only the LEGO sets for the specific user
router.get("/", (req, res) => {
  console.log('REQ.USER:', req.user)
  const queryText = `
    SELECT * FROM "gallery_item"
    WHERE user_id=($1)
    ORDER BY id DESC
    ;
  `;
  const queryParams = [req.user.id]
  // console.log('QUERYPARAMS', queryParams)
  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.error("Error Getting Gallery", err);
      res.sendStatus(500);
    });
});


// ! 
router.get("/stats/:id", (req, res) => {
  const queryText = `
    SELECT COUNT(*) as total_sets, SUM(CAST(num_parts AS INTEGER)) as total_num_parts, string_agg(DISTINCT(CAST(theme_id AS text)), ', ') as all_theme_id
    FROM "gallery_item"
    WHERE user_id=$1;
  `;
  const queryParams = [req.params.id];
  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.error("Error getting stats:", err);
      res.sendStatus(500);
    });
});

// ! DELETE a LEGO set by ID.
// TODO add condition for user.id --
// WHERE id=$1 && user.id=$2
router.delete("/:id", (req, res) => {
  const queryText = `
    DELETE FROM "gallery_item"
    WHERE id=($1);
  `;
  const queryParams = [req.params.id];
  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error("Error deleting set", err);
      res.sendStatus(500);
    });
});

// Update data for specific LEGO set
// TODO add condition for user.id --
// WHERE id=$1 && user.id=$2
router.patch("/", (req, res) => {
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
    lego.id,
  ];
  // console.log('req.body', req.body)
  // console.log('queryParams:', queryParams)
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

// Update comments for specific LEGO set
// TODO add condition for user.id --
// WHERE id=$1 && user.id=$2
router.patch("/comments", (req, res) => {
  const queryText = `
      UPDATE "gallery_item"
      SET comments = $2
      WHERE id=$1
    `;
    console.log('REQ.BODY', req.body);
  const queryParams = [req.body.setid, req.body.comments];

  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error("Error updating comments:", err);
      res.sendStatus(500);
    });
});

router.patch("/favorite/:id", (req, res) => {
  const queryText = `
    UPDATE "gallery_item"
      SET favorite = NOT favorite
    WHERE id=$1;
  `;
  const queryParams = [req.params.id];
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
