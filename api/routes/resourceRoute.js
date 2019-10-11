const express = require('express');

const Resources = require('../../database/helpers/resourceModel');

const router = express.Router()

router.get('/', (req, res) => {
    Resources.find()
        .then(resource => {
            res.status(200).json(resource)
        }).catch(err => {
            res.status(500).json({
                message: 'failed to get resource'
            })
        })
})
//get by id
router.get('/:id', (req, res) => {
    const { id } = req.params
    Resources.findById(id)
        .then(resource => {
            if (resource) {
                res.status(200).json(resource)
            } else {
                res.status(404).json({ message: "ID could not be found" })
            }
        }).catch(err => {
            res.status(500).json(err)
        })
})

//add task
router.post('/', (req, res) => {
    const newResource = req.body
    Resources.add(newResource)
        .then(resource => {
            res.status(201).json(resource)
        }).catch(err => {
            res.status(500).json(err)
        })
})



module.exports = router