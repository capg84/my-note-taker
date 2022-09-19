// declaring dependencies
const express = require('express');
const uuid = require('uuid');
const router = express.Router();

let data = require('../db/db.json');

// reading data from the server
router.get('/', (req, res) => res.json(data));

// writing data on the server
router.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Please enter a title and description for the note.'})
    } else {
        const newJSON = {
            id: uuid.v4(),
            title: newTitle,
            text: newText
        };
        data.push(newJSON);
        res.json(data);
    };
});

// deleting data from ther server
router.delete('/:id', (req, res) => {
    const found = data.some(obj => obj.id === req.params.id);
    if (found) {
        data = data.filter(obj => obj.id !== req.params.id);
        res.json(data);
    } else {
        res.status(400).json(data);
    };
});

// exporting the router
module.exports = router;