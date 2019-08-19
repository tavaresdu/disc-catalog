var router = require('express').Router();

router.route('/').get(function (req, res) {
    return res.status(200).send("API OK!");
});
router.use('/disc', require('./discRoutes'));
router.use('/collection', require('./collectionRoutes'));

router.route('/search').post(require('../controller').search.findByText);

module.exports = router;