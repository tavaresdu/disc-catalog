const Collection = require('../models').Collection;
const Disc = require('../models').Disc;
const Op = require('sequelize').Op;

module.exports = {
    async findByText(req, res) {
        let q = `%${req.body.q}%`;
        let found = {
            collections: [],
            discs: [],
        };
        status = 200;

        await Disc.findAll({
            where: {
                [Op.or]: [{
                        artist: {
                            [Op.like]: q
                        }
                    },
                    {
                        title: {
                            [Op.like]: q
                        }
                    },
                    {
                        genre: {
                            [Op.like]: q
                        }
                    },
                    {
                        songs: {
                            [Op.like]: q
                        }
                    },
                ]
            }
        }).then(
            disc => found.discs = disc
        ).catch(function (error) {
            status = 500;
            found = error;
        });

        if (status === 500) {
            return res.status(status).send(found);
        }

        await Collection.findAll({
            where: {
                [Op.or]: [{
                        name: {
                            [Op.like]: q
                        }
                    },
                    {
                        description: {
                            [Op.like]: q
                        }
                    },
                ]
            }
        }).then(
            collection => found.collections = collection
        ).catch(function (error) {
            status = 500;
            found = error;
        });

        return res.status(status).send(found);
    },
};