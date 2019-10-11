const express = require('express');

const Tasks = require('../../database/helpers/taskModel');

const router = express.Router()

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

module.exports = router