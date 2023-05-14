const User = require("./user")
const Material = require("./material")
const Course = require("./course")
const Enroll = require("./enrollment")
const Assessment = require("./assesment")
const AuditTrail = require("./audit")

const model = {
    User,
    Material,
    Course,
    Enroll,
    Assessment,
    AuditTrail
}

module.exports = model