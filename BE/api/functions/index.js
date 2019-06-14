const checkDepartment = require('./checkDepartment.js')
const checkRole = require('./checkRole.js')
const restricted = require('./restrictedMiddelware.js')
const validateUser = require('./validateUser.js')   
const validateUserData = require('./validateUserData.js')

module.exports = {
    checkDepartment,
    checkRole,
    restricted,
    validateUser,
    validateUserData
}