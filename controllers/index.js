const User = require("./user.controller")
const Material = require("./material.controller")
const Course = require("./course.controller")
const All = require("./all.controller")

const controller = {
    User,
    Material,
    Course,
    All
}

module.exports = controller;