const checkDepartment = require('./checkDepartment.js')
const checkRole = require('./checkRole.js')
const restricted = require('./restrictedMiddelware.js')

module.exports = {
    checkDepartment,
    checkRole,
    restricted
}