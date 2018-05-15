"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
const db_1 = require("../db");
route.get('/:id', (req, res) => {
    db_1.Subject.findAll({
        attributes: ['id', 'name', 'courseId'],
        where: {
            id: req.params.id
        }
    })
        .then((subjects) => {
        res.status(200).send(subjects);
    })
        .catch((error) => {
        res.status(501).send({
            success: false,
            message: "No matching id found !!"
        });
    });
});
route.get('/:id/teachers', (req, res) => {
    console.log("Inside course by id and batches");
    db_1.Teacher.findAll({
        attributes: ['id', 'name', 'subjectId'],
        where: {
            subjectId: req.params.id
        }
    }).then((coursebatch) => {
        console.log(coursebatch);
        res.status(200).send(coursebatch);
    })
        .catch((err) => {
        res.status(501).send({
            success: false,
            message: "could not find course by batch and id"
        });
    });
});
route.get('/', (req, res) => {
    db_1.Subject.findAll({
        attributes: ['id', 'name', 'courseId']
    })
        .then((subjects) => {
        res.status(200).send(subjects);
    })
        .catch((err) => {
        res.status(501).send({
            success: false,
            message: "Error retrieving courses"
        });
    });
});
route.post('/', (req, res) => {
    db_1.Subject.create(req.body).then((subject) => {
        res.json(subject);
    }).catch(() => {
        res.status(501).send({
            success: false,
            message: "Error in creating data"
        });
    });
});
exports.default = route;
