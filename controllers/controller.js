// require express, define Router:
const express = require('express')
const router = express.Router();

// Requiring Passport for later use
const passport = require("../config/passport");

// require models:
const db = require("../models");

// Create a router for the app and export the router at the end of this file

// HTML ROUTES
router.get('/', function (req, res) {
    res.render('index')
})

router.get('/portfolio', function (req, res) {
    db.Project.findAll({ raw: true }).then(function (data) {
        res.render('portfolio', { project: data })
        // res.json(data);
    });
})

router.get('/contact', function (req, res) {
    res.render('contact')
})

router.get('/admin', function (req, res) {
    db.Project.findAll({ raw: true }).then(function (data) {
        res.render('admin', { project: data })
        // res.json(data);
    });
})

router.get('/edit/:id', function (req, res) {
    db.Project.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        // Need to render an edit page
        res.render('edit', data.dataValues)
        // console.log(data)
        // res.json(data);
    });
})

// END HTML ROUTING

// Need a post route to Login to passport session
// router.post('/api/XXX', function (req, res) {

// })

// ADD PROJECT
router.post('/api/project', function (req, res) {
    console.log(req.body)
    db.Project.create(req.body)
        .then((data) => {
            // temporary response
            res.json(data);
            // ideal response is a redirect
            // 201 returns 'created'
            // res.sendStatus(201)
        })
        .catch((err) => {
            res.status(400).json(err);
        });
})

// EDIT PROJECT
router.put('/api/project/:id', function (req, res) {
    // console.log(req.body)
    db.Project.update(
        req.body,
        {
            where: {
                id: req.params.id
            }
        }).then((data) => {
            // console.log(data)
            res.json(data);
        }).catch(() => {
            // 304 returns not modified
            res.sendStatus(304)
        });
})

// DELETE PROJECT
router.delete('/api/project/:id', function (req, res) {
    db.Project.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            // ideal response is a success
            res.sendStatus(202)
        })
        .catch((err) => {
            res.status(400).json(err);
        });
})

module.exports = router;
