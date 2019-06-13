const Users = require('../models/usersModel.js')
const bcrypt = require('bcryptjs')
const func = require('../functions')

module.exports = async function validateUser(req, res, next) {
    console.log('username', req.body.username)
    const username = req.body.username
    const password = req.body.password
    console.log(username)
    try {
        const user = await Users.findBy({ username })
        .first()
        console.log(user)
        console.log(password, user.password)
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = func.generateToken(user)
            req.validUser = {
                username: user.username,
                token: token
            }
            next()
        } else {
            res.status(401).json({
                message: "Invalid Credentials"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}