const express = require('express');

const Projects = require('../../database/helpers/projectModel');

const router = express.Router()

const errorRef = require('../../middleware/errorRef');
//Get request
router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
        }).catch(error => {
            res.status(500).json(errorRef(err))
        })
})

module.exports = router