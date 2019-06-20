const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets.js')

module.exports = user => {
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