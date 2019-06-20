const express = require('express')

const Users = require('../models/usersModel.js')

const func = require('../functions')

const router = express.Router()

router.post('/register', func.validateUserData, async (req, res) => {
    const newUser = req.validInput
    console.log(newUser)
    try {
        const user = await Users.add(newUser)
        res.status(201).json(user)
    } catch (error) {
        console.log("error")
    }
})

router.post('/login', func.validateUser, async (req, res) => {
    try {
        res.status(200).json({
            message: `Welcome ${req.validUser.username}`,
            user: req.validUser
        })
    } catch (error) {
        console.log("error")
        res.status(500).json({
            message: "Error"
        })
    }
})

module.exports = router