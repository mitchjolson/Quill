const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


router.get('/', (req, res) => {
    const sqlText = `select * from notes;`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('error retrieving notes', error);
            res.sendStatus(500)
        })
});


router.post('/', (req, res) => {
    console.log('posting a note, req.body is:', req.body);
    const sqlText = `insert into notes (text) VALUES ($1);`;
    const sqlValues = [req.body.text];
    pool.query(sqlText, sqlValues)
        .then((response) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('error posting note', error)
            res.sendStatus(500)
        })
})

module.exports = router;