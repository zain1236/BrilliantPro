var express = require("express")
var router = express.Router();
var controller = require("../controllers")


router.post("/add",controller.Enroll.create)

router.get("/:id",controller.Enroll.getOne)


module.exports = router;