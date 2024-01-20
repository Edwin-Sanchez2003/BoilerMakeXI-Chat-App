// Imports
import { Entity, Schema } from 'redis-om';
import client from '../client.js';

// Item class - extends the default class of Entity
class Item extends Entity {}

/* create a Schema for Person */
const itemSchema = new Schema(Item, {
    name: { // the name of the item being sold
        type: String,
        required: true,
        unique: false
    },
    description: { // a text description of the item
        type: String,
        required: true,
        unique: false
    },
    price: { // a price for the item, in USD
        type: Number,
        required: true,
        unique: false
    }
}); // end itemSchema

/* use the client to create a Repository just for Persons */
export const itemRepository = client.fetchRepository(itemSchema);

/* create the index for Person */
await itemRepository.createIndex();
