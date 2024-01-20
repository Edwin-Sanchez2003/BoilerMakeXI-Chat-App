/*
    Router for the Index Page of the E-Commerce Site
*/


// Imports
const express = require('express');
const router = express.Router();


// Main Page Route
router.get('/', async (req, res) => {   
    res.render('index');
}); // end get req/resp for main page route


// Exports
module.exports = router;
