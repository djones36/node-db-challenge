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

//get by id
router.get('/:id', (req, res) => {
    const { id } = req.params
    Projects.findById(id)
        .then(project => {
            if (project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({ message: "ID could not be found" })
            }
        }).catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router