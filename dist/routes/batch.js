"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
const db_1 = require("../db");
route.get('/:id', (req, res) => {
    db_1.Batch.findAll({
        attributes: ['id', 'name', 'courseId'],
        where: {
            id: req.params.id
        }
    })
        .then((batches) => {
        res.status(200).send(batches);
    })
        .catch((error) => {
        res.status(501).send({
            success: false,
            message: "No matching id found !!"
        });
    });
});
route.get('/', (req, res) => {
    db_1.Batch.findAll({
        attributes: ['id', 'name', 'courseId']
    })
        .then((batches) => {
        res.status(200).send(batches);
    })
        .catch((err) => {
        res.status(501).send({
            success: false,
            message: "Error retrieving courses"
        });
    });
});
route.post('/', (req, res) => {
    db_1.Batch.create(req.body).then((batch) => {
        res.json(batch);
    }).catch(() => {
        res.status(501).send({
            success: false,
            message: "Error in creating data"
        });
    });
});
exports.default = route;
