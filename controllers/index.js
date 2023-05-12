const User = require("./user.controller")
const Material = require("./material.controller")
const Course = require("./course.controller")
const All = require("./all.controller")
const Assesment = require("./assesment.controller")

const controller = {
    User,
    Material,
    Course,
    All,
    Assesment
}

module.exports = controller;