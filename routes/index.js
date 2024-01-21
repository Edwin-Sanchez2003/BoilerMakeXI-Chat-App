/*
    Router for the Index Page of the E-Commerce Site
*/


// Imports
const express = require('express');
const router = express.Router();

// Models
const Item = require('../models/commerce/item.js');

// Main Page Route
router.get('/', async (req, res) => {
    try {
        const items = await Item.find({}).exec();
        res.render('index', { items });
    } catch {
        res.redirect('/items/');
    } // end try-catch
}); // end get req/resp for main page route


// Exports
module.exports = router;
