const express = require('express')

const Users = require('../models/usersModel.js')

const func = require('../functions')

const router = express.Router()

router.get('/', func.restricted, func.checkRole('admin'), async (req, res) => {
    try {
        const users = await Users.find()
        res.status(200).json({
            users: users,
            user: req.user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error"
        })
    }
})

router.get('/departments/:name', func.restricted, func.checkDepartment, async (req, res) => {
    const department = req.user.department
    try {
        const users = await Users.findBy({ department })
        res.status(200).json({
            users: users,
            user: req.user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error"
        })
    }
})

module.exports = router