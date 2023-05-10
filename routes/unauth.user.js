var express = require("express")
var router = express.Router();
var controller = require("../controllers/index")


// router.post("/login",controller.User.)

router.post("/add",controller.User.create)

module.exports = router;