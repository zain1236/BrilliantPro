const User = require("./user.controller")
const Material = require("./material.controller")
const Course = require("./course.controller")
const All = require("./all.controller")
const Assesment = require("./assesment.controller")
const Enroll = require("./enroll.controller")

const controller = {
    User,
    Material,
    Course,
    All,
    Assesment,
    Enroll
}

module.exports = controller;