const express = require('express');
const postRoutes = express.Router();

let collectionController = require('../controller').collection;

postRoutes.route('/').get(collectionController.findAll);
postRoutes.route('/').post(collectionController.create);
postRoutes.route('/:id').get(collectionController.findById);
postRoutes.route('/:id/discs').get(collectionController.findDiscsByCollectionId);
postRoutes.route('/:id').put(collectionController.update);
postRoutes.route('/:id').delete(collectionController.destroy);

module.exports = postRoutes;