const Collection = require('../models').Collection;
const Disc = require('../models').Disc;

module.exports = {
    findAll(req, res) {
        return Collection.findAll().then(
            collection => res.status(200).send(collection)
        ).catch(
            error => res.status(500).send(error)
        );
    },
    create(req, res) {
        return Collection.create({
            name: req.body.name,
            description: req.body.description,
        }).then(
            collection => res.status(201).send(collection)
        ).catch(
            error => res.status(500).send(error)
        );
    },
    findById(req, res) {
        return Collection.findByPk(
            req.params.id
        ).then(function (result) {
            if (result) {
                res.status(200).send(result.dataValues);
            } else {
                res.status(404).send({
                    error: "Collection ID not found."
                });
            }
        }).catch(
            error => res.status(500).send(error)
        );
    },
    update(req, res) {
        return Collection.update({
            name: req.body.name,
            description: req.body.description
        }, {
            where: {
                id: req.params.id
            },
            fields: Object.keys(req.body)
        }).then(function (result) {
            if (result && result[0]) {
                res.status(200).send({
                    message: "Collection updated."
                });
            } else {
                res.status(404).send({
                    error: "Collection ID not found."
                });
            }
        }).catch(
            error => res.status(500).send(error)
        );
    },
    destroy(req, res) {
        Disc.destroy({
            where: {
                collectionId: req.params.id
            }
        });
        return Collection.destroy({
            where: {
                id: req.params.id
            },
        }).then(function (result) {
            if (result) {
                res.status(200).send({
                    message: "Collection deleted."
                });
            } else {
                res.status(404).send({
                    error: "Collection ID not found."
                });
            }
        }).catch(
            error => res.status(500).send(error)
        );
    },
    findDiscsByCollectionId(req, res) {
        return Disc.findAll({
            where: {
                collectionId: req.params.id
            },
        }).then(
            disc => res.status(200).send(disc)
        ).catch(
            error => res.status(500).send(error)
        );
    },
};