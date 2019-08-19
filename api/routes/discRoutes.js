const express = require('express');
const postRoutes = express.Router();

let discController = require('../controller').disc;

postRoutes.route('/').get(discController.findAll);
postRoutes.route('/').post(discController.create);
postRoutes.route('/:id').get(discController.findById);
postRoutes.route('/:id').put(discController.update);
postRoutes.route('/:id').delete(discController.destroy);

module.exports = postRoutes;