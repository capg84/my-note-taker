// declaring dependencies
const fs = require('fs');
const path = require('path');

const express = require('express');
const router = express.Router();

const getPath = (name) => path.join(__dirname, '..', 'public', `${name}.html`);

router.get('/notes', (req, res) => {
    res.sendFile(getPath("notes"));
});

router.get('*', (req, res) => {
    res.sendFile(getPath("index"));
});

// exporting router
module.exports = router;