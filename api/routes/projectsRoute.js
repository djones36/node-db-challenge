const express = require('express');

const Projects = require('../../database/helpers/projectModel');

const router = express.Router()

const errorRef = require('../../middleware/errorRef');
//Get request
router.get('/', (req, res) => {
    Projects.find()
        .then(project => {
            res.status(200).json(project)
        }).catch(err => {
            res.status(500).json({
                message: 'failed to get projects'
            })
        })
})

module.exports = router