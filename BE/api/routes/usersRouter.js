const express = require('express')

const Users = require('../models/usersModel.js')

const func = require('../functions')

const router = express.Router()

router.get('/', func.restricted, func.checkRole('it'), func.checkDepartment('Tech'), async (req, res) => {
    console.log('user', req.user)
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

module.exports = router