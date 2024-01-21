/*
    Router for item displays of the E-Commerce Site
*/


// Imports
const express = require('express');
const router = express.Router();

// Models
const Item = require('../models/commerce/item.js');


// new item route
router.get('/new', async (req, res) => {
    // render the form
    console.log("New");
    res.render('items/add.ejs');
});


// Create an Item (PUT)
router.post('/', async (req, res) => {
    // create new item
    const item = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    try { // save item & send them to item display page
        item.save();
        res.redirect(`/items/${item.id}`);
    }
    catch { // add err msg for when item is not passed?
        res.redirect('/items/');
    } // end try-catch
}); // end POST request


// Get Route
router.get('/:id', async (req, res) => {
    console.log("id");
    try {// attempt to retrieve Item from DB.
        const item = await Item.findById(req.params.id).exec();

        // check if the item return value is null -> means no item found
        if (item === null) {
            // if so, then redirect to the Not Found page(URL)
            res.redirect('/items/');
        } else {
            // if item exists, then render it
            res.render('items/display.ejs', { item });
        } // end if
    } catch {
        res.redirect('/items/');
    } // end try-catch
}); // end get req/resp for main page route


// edit route
router.get('/:id/edit', async (req, res) => {
    console.log("id");
    try {// attempt to retrieve Item from DB.
        const item = await Item.findById(req.params.id).exec();

        // check if the item return value is null -> means no item found
        if (item === null) {
            // if so, then redirect to the Not Found page(URL)
            res.redirect('/items/');
        } else {
            // if item exists, then render it
            res.render('items/edit.ejs', { item });
        } // end if
    } catch {
        res.redirect('/items/');
    } // end try-catch
}); // end get req/resp for main page route


// Update an Item
router.put('/:id', async (req, res) => {
    // fetch item data from the db
    const item = await Item.findById(req.params.id).exec();
  
    // set (new?) values
    item.name = req.body.name ?? item.name;
    item.description = req.body.description ?? item.description;
    item.price = req.body.price ?? item.price;
  
    // put back in db
    await item.save(item);
  
    // render webpage
    res.redirect(`/items/${item.id}`);
}); // end PUT


// Delete an Item
router.delete('/:id/delete', async (req, res) => {
    // Nothing for now...
});


/* Item Not Found -> '/' */
router.get('/', async (req, res) => {
    res.render('items/notFound.ejs');
}); // end get

// Exports
module.exports = router;
