const Disc = require('../models').Disc;

module.exports = {
    findAll(req, res) {
        return Disc.findAll().then(
            disc => res.status(200).send(disc)
        ).catch(
            error => res.status(500).send(error)
        );
    },
    create(req, res) {
        return Disc.create({
            artist: req.body.artist,
            title: req.body.title,
            year: req.body.year,
            genre: req.body.genre,
            songs: req.body.songs,
            collectionId: req.body.collectionId
        }).then(
            disc => res.status(201).send(disc)
        ).catch(
            error => res.status(500).send(error)
        );
    },
    findById(req, res) {
        return Disc.findByPk(
            req.params.id
        ).then(function (result) {
            if (result) {
                res.status(200).send(result.dataValues);
            } else {
                res.status(404).send({
                    error: "Disc ID not found."
                });
            }
        }).catch(
            error => res.status(500).send(error)
        );
    },
    update(req, res) {
        return Disc.update({
            artist: req.body.artist,
            title: req.body.title,
            year: req.body.year,
            genre: req.body.genre,
            songs: req.body.songs
        }, {
            where: {
                id: req.params.id
            },
            fields: Object.keys(req.body)
        }).then(function (result) {
            if (result && result[0]) {
                res.status(200).send({
                    message: "Disc updated."
                });
            } else {
                res.status(404).send({
                    error: "Disc ID not found."
                });
            }
        }).catch(
            error => res.status(500).send(error)
        );
    },
    destroy(req, res) {
        return Disc.destroy({
            where: {
                id: req.params.id
            },
        }).then(function (result) {
            if (result) {
                res.status(200).send({
                    message: "Disc deleted."
                });
            } else {
                res.status(404).send({
                    error: "Disc ID not found."
                });
            }
        }).catch(
            error => res.status(500).send(error)
        );
    },
};