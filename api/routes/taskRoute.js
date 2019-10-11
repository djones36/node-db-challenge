const express = require('express');

const Tasks = require('../../database/helpers/taskModel');

const router = express.Router()
const middleware = require('../../middleware/globalMiddleware');
router.get('/', (req, res) => {
    Tasks.find()
        .then(task => {
            res.status(200).json(task)
        }).catch(err => {
            res.status(500).json({
                message: 'failed to get tasks'
            })
        })
})
//get by id
router.get('/:id', (req, res) => {
    const { id } = req.params
    Tasks.findById(id)
        .then(task => {
            if (task) {
                res.status(200).json(task)
            } else {
                res.status(404).json({ message: "ID could not be found" })
            }
        }).catch(err => {
            res.status(500).json(err)
        })
})

//add task
router.post('/', middleware.validateProjId, (req, res) => {
    const newTask = req.body
    Tasks.add(newTask)
        .then(task => {
            res.status(201).json(task)
        }).catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router