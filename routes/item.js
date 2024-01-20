/*
    Router for item displays of the E-Commerce Site
*/


// Imports
const express = require('express');
const router = express.Router();
import { itemRepository } from '../models/commerce/item';


// Get Route
router.get('/:id', async (req, res) => {
    const item = await itemRepository.fetch(req.params.id);
    res.render('item', { item });
}); // end get req/resp for main page route


// Create an Item (PUT)
router.put('/', async (req, res) => {
    // put data into item (parses data for you)
    const item = await itemRepository.createAndSave(req.body);

    // render stuff instead!!
    res.render('item', { item });
}); // end PUT request


// Update an Item
router.post('/:id', async (req, res) => {
    // fetch item data from the db
    const item = await itemRepository.fetch(req.params.id);
  
    // set values
    item.name = req.body.name ?? null;
    item.description = req.body.name ?? null;
    item.price = req.body.name ?? null;
  
    // put back in db
    await itemRepository.save(person);
  
    // render webpage
    res.render('item', { item });
}); // end Update


// Delete an Item
router.delete('/:id', async (req, res) => {
    await personRepository.remove(req.params.id)
    res.send({ entityId: req.params.id })
  })




// Exports
module.exports = router