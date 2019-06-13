const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Users = require('../models/usersModel.js')
const secrets = require('../config/secrets.js')

const router = express.Router()

router.post('/register',  async (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    try {
        const newUser = await Users.add(user)
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error"
        })
    }
})

router.post('/login',  async (req, res) => {
    let { username, password } = req.body

    try {
        const user = await Users.findBy({ username })
        .first()
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({
                message: `Welcome ${user.username}`,
                token: token
            })
        } else {
            res.status(401).json({
                message: "Invalid Credentials"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error"
        })
    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role,
        department: user.department
    }

    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router